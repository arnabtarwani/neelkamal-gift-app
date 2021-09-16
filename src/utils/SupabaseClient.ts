import { createClient } from '@supabase/supabase-js'
import { REACT_APP_SUPABASE_URL, REACT_APP_SUPABASE_ANON_KEY, JWT_TOKEN } from "@env"
import AsyncStorage from '@react-native-async-storage/async-storage';

const supabaseUrl = REACT_APP_SUPABASE_URL

const supabaseAnonKey = REACT_APP_SUPABASE_ANON_KEY

const options = {
    localStorage: AsyncStorage as any,
    detectSessionInUrl: false,
    // autoRefreshToken: true,
    // persistSession: true
    // url: string,
    // headers?: { [key: string]: string },
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, options)

