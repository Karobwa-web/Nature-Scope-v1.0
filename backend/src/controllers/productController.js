const db = require('../config/db');

// Sample initial products for offline/seed preview
const MOCK_PRODUCTS = [
  {
    id: 'prod-001',
    title: 'Pure Nilotica Shea Butter (250g)',
    slug: 'pure-nilotica-shea-butter',
    category: 'Natural Skincare & Haircare',
    vendor: 'Karamoja Organics',
    price_ugx: 28000,
    stock_quantity: 45,
    rating: 4.9,
    reviews_count: 32,
    image_url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
    description: 'Cold-pressed virgin shea butter sourced sustainably from wild Vitellaria nilotica trees in Northern Uganda.'
  },
  {
    id: 'prod-002',
    title: 'Organic Moringa Oleifera Leaf Powder (200g)',
    slug: 'organic-moringa-leaf-powder',
    category: 'Herbal Remedies & Tinctures',
    vendor: 'Nile Valley Herbals',
    price_ugx: 18500,
    stock_quantity: 110,
    rating: 4.8,
    reviews_count: 54,
    image_url: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
    description: '100% pure organic moringa leaves, shade dried and finely milled to preserve dense multivitamins and antioxidants.'
  },
  {
    id: 'prod-003',
    title: 'Raw Mountain Forest Honey (500ml)',
    slug: 'raw-mountain-forest-honey',
    category: 'Organic Foods & Nutrition',
    vendor: 'Rwenzori Apiaries',
    price_ugx: 25000,
    stock_quantity: 60,
    rating: 5.0,
    reviews_count: 78,
    image_url: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80',
    description: 'Unprocessed, unfiltered multi-floral raw honey harvested from wild hives in the Rwenzori foothills.'
  },
  {
    id: 'prod-004',
    title: 'Deep Tissue Herbal Aromatherapy (60 Mins)',
    slug: 'deep-tissue-herbal-aromatherapy',
    category: 'Spa & Holistic Therapies',
    vendor: 'Entebbe Botanical Wellness Spa',
    price_ugx: 95000,
    stock_quantity: 12,
    is_service: true,
    rating: 4.9,
    reviews_count: 19,
    image_url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=600&q=80',
    description: 'Therapeutic full-body massage using indigenous infused herbal massage oils for chronic stress relief and muscle recovery.'
  }
];

exports.getAllProducts = async (req, res, next) => {
  try {
    const { category, search, minPrice, maxPrice } = req.query;
    let products = [...MOCK_PRODUCTS];

    if (category) {
      products = products.filter(p => p.category.toLowerCase().includes(category.toLowerCase()));
    }
    if (search) {
      products = products.filter(p => p.title.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase()));
    }
    if (minPrice) {
      products = products.filter(p => p.price_ugx >= Number(minPrice));
    }
    if (maxPrice) {
      products = products.filter(p => p.price_ugx <= Number(maxPrice));
    }

    res.json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    next(error);
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    const product = MOCK_PRODUCTS.find(p => p.id === req.params.id || p.slug === req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
    res.json({ success: true, data: product });
  } catch (error) {
    next(error);
  }
};
