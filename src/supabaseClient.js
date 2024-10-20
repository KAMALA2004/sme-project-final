// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://obwefszpqatcyaqmlwtd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9id2Vmc3pwcWF0Y3lhcW1sd3RkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk0MDk2NTgsImV4cCI6MjA0NDk4NTY1OH0.n7YED2iqSFsMB_LJ2HB1y8QLFM99-CvjX_XvayTWFZE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
