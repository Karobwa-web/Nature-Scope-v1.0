const MOCK_VENDORS = [
  {
    id: 'ven-001',
    business_name: 'Karamoja Organics',
    district: 'Moroto / Kampala',
    status: 'approved',
    rating: 4.9,
    products_count: 14,
    description: 'Specialists in ethical, fair-trade Nilotica shea butter harvested by women cooperatives in Northern Uganda.'
  },
  {
    id: 'ven-002',
    business_name: 'Nile Valley Herbals',
    district: 'Jinja',
    status: 'approved',
    rating: 4.8,
    products_count: 22,
    description: 'Organic medicinal plant cultivation and botanical wellness supplements.'
  },
  {
    id: 'ven-003',
    business_name: 'Rwenzori Apiaries',
    district: 'Kasese',
    status: 'approved',
    rating: 5.0,
    products_count: 8,
    description: 'High-altitude mountain forest beekeeping, producing pure organic raw honey and beeswax products.'
  },
  {
    id: 'ven-004',
    business_name: 'Entebbe Botanical Wellness Spa',
    district: 'Wakiso / Entebbe',
    status: 'approved',
    rating: 4.9,
    products_count: 6,
    description: 'Holistic wellness center offering aromatherapy, hot stone therapy, and herbal body treatments.'
  }
];

exports.getAllVendors = async (req, res, next) => {
  try {
    res.json({
      success: true,
      count: MOCK_VENDORS.length,
      data: MOCK_VENDORS
    });
  } catch (error) {
    next(error);
  }
};

exports.getVendorById = async (req, res, next) => {
  try {
    const vendor = MOCK_VENDORS.find(v => v.id === req.params.id);
    if (!vendor) {
      return res.status(404).json({ success: false, message: 'Vendor not found' });
    }
    res.json({ success: true, data: vendor });
  } catch (error) {
    next(error);
  }
};
