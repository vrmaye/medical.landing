-- Enable RLS on lead_items if not already enabled
ALTER TABLE medic.lead_items ENABLE ROW LEVEL SECURITY;

-- Allow anonymous and authenticated users to insert lead_items
CREATE POLICY "Anon and Authenticated can insert lead_items" ON medic.lead_items
    FOR INSERT WITH CHECK (TRUE);

-- Allow anonymous and authenticated users to read lead_items
CREATE POLICY "Anon and Authenticated can read lead_items" ON medic.lead_items
    FOR SELECT USING (TRUE);

-- Allow anonymous and authenticated users to update lead_items
CREATE POLICY "Anon and Authenticated can update lead_items" ON medic.lead_items
    FOR UPDATE USING (TRUE);
