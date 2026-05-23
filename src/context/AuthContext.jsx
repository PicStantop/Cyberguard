import React, { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [user, setUser]       = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      if (session?.user) fetchProfile(session.user.id)
      else setLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
      if (session?.user) fetchProfile(session.user.id)
      else { setProfile(null); setLoading(false) }
    })

    return () => subscription.unsubscribe()
  }, [])

  async function fetchProfile(userId) {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single()
      if (error) { console.error('Profile fetch error:', error); setProfile(null) }
      else setProfile(data)
    } catch (err) {
      console.error('Profile fetch failed:', err); setProfile(null)
    } finally {
      setLoading(false)
    }
  }

  async function signUp({ fullName, username, password }) {
    // Username becomes the email prefix for Supabase auth
    const safeUser = username.toLowerCase().trim().replace(/[^a-z0-9_]/g, '')
    const email    = `${safeUser}@cyberguard.app`

    const { data, error } = await supabase.auth.signUp({
      email, password,
      options: { data: { full_name: fullName.trim(), username: safeUser } }
    })
    if (error) throw error

    const { error: profileError } = await supabase.from('profiles').insert({
      id:        data.user.id,
      full_name: fullName.trim(),
      username:  safeUser,
      role:      'student',
    })
    if (profileError) throw profileError
    return data
  }

  async function signIn({ username, password }) {
    const safeUser = username.toLowerCase().trim().replace(/[^a-z0-9_]/g, '')
    const email    = `${safeUser}@cyberguard.app`
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
    return data
  }

  async function signInTeacher({ email, password }) {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw error
    return data
  }

  async function signOut() {
    await supabase.auth.signOut()
    setUser(null)
    setProfile(null)
  }

  return (
    <AuthContext.Provider value={{ user, profile, loading, signUp, signIn, signInTeacher, signOut, fetchProfile }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
