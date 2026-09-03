-- =========================================================
-- Nature Scope: Initial Seed Data
-- =========================================================

-- Seed Categories
INSERT INTO categories (name, slug, description, image_url) VALUES
('Organic Foods & Nutrition', 'organic-foods', 'Certified organic fruits, vegetables, grains, raw honey, and whole foods from regional farmers.', 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=600&q=80'),
('Herbal Remedies & Tinctures', 'herbal-remedies', 'Traditional African herbs, moringa powders, neem extracts, and indigenous wellness formulas.', 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80'),
('Natural Skincare & Haircare', 'natural-skincare', 'Pure shea butter from Northern Uganda, cold-pressed oils, handmade botanical soaps, and balms.', 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80'),
('Spa & Holistic Therapies', 'spa-therapies', 'Aromatherapy massages, acupuncture, reflexology, and natural wellness retreat sessions.', 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80')
ON CONFLICT (name) DO NOTHING;
