import { createClient } from '@supabase/supabase-js'
import { NEELKAMAL_APP_1_APP_URL, NEELKAMAL_APP_1_DB_KEY, NEELKAMAL_APP_2_APP_URL, NEELKAMAL_APP_2_DB_KEY } from "@env"
import AsyncStorage from '@react-native-async-storage/async-storage';

const supabaseUrl = NEELKAMAL_APP_1_APP_URL 

const supabaseAnonKey = NEELKAMAL_APP_1_DB_KEY

const options = {
    localStorage: AsyncStorage as any,
    detectSessionInUrl: false,
    // autoRefreshToken: true,
    // persistSession: true
    // url: string,
    // headers?: { [key: string]: string },
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, options)

