import { supabase } from './supabaseClient'

export const signUpUser = async (email: string, password: string, fullName: string) => {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                full_name: fullName,
            }
        }
    })
    return { data, error }
}

export const signInUser = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })
    return { data, error }
}

export const signOutUser = async () => {
    const { error } = await supabase.auth.signOut()
    return { error }
}

export const getCurrentUser = async () => {
    const { data: { session }, error } = await supabase.auth.getSession()
    if (error || !session) return null
    return session.user
}

export const getUserRole = async (userId: string) => {
    try {
        const { data, error } = await supabase
            .from('profiles')
            .select('role')
            .eq('id', userId)
            .single()
            
        if (error) throw error
        return data?.role || null
    } catch (error) {
        console.error('Error fetching user role:', error)
        return null
    }
}
