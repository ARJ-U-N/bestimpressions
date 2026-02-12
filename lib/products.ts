export interface Product {
  id: string
  name: string
  category: 'id-cards' | 'pvc-cards' | 'mugs' | 'merch'
  categoryLabel: string
  description: string
  price: number
  features: string[]
  image: string
}

export interface CategoryDetail {
  slug: string
  title: string
  subtitle: string
  description: string[]
  image: string
}

// ─── Category Details (for category pages) ───
export const categoryDetails: CategoryDetail[] = [
  {
    slug: 'id-cards',
    title: 'Identity Cards',
    subtitle: 'Professional ID Solutions for Every Organization',
    description: [
      'At Best Impressions, we specialize in producing high-quality PVC identity cards that are built to last. Our ID cards are manufactured using premium-grade PVC material that is water-proof, scratch-resistant, and virtually unbreakable — ensuring your cards look professional for years to come.',
      'We offer a wide range of ID card solutions including Employee IDs, Student IDs, Visitor Passes, RFID-enabled Access Cards, and fully Customized ID Cards with unique shapes and designs. Each card features vibrant full-color printing with sharp text and crisp images using advanced dye-sublimation technology.',
      'Our ID card packages also include complementary accessories such as Retractable Badge Reels with custom logo printing, Premium Satin Lanyards with embroidered branding, and durable Card Holders. Whether you need 10 cards or 10,000, we offer competitive bulk pricing with quick turnaround times. All orders include free design consultation and unlimited revisions.',
    ],
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1200&h=600&fit=crop',
  },
  {
    slug: 'pvc-cards',
    title: 'PVC Cards',
    subtitle: 'Premium Business & Membership Card Printing',
    description: [
      'Make a lasting first impression with our premium PVC business cards and membership cards. Unlike traditional paper cards, our PVC cards are crafted from durable plastic material that resists bending, tearing, and water damage — ensuring your brand stays intact in any condition.',
      'Our Business Booster Cards come in stunning transparent and frosted finishes that immediately stand out. We offer full-color CMYK printing on both sides, with options for embossed text, metallic foil stamping, and custom die-cut shapes. Each card is precision-cut with smooth rounded corners for a professional finish.',
      'For clubs, gyms, and organizations, our Membership Cards feature options like magnetic stripe encoding, barcode/QR code printing, sequential numbering, and custom loyalty program integration. We use industry-standard CR80 sizing (3.375" × 2.125") compatible with all standard card holders and printers.',
    ],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop',
  },
  {
    slug: 'mugs',
    title: 'Mug Printing',
    subtitle: 'Custom Printed Mugs for Every Occasion',
    description: [
      'Transform ordinary mugs into extraordinary gifts and promotional items with our state-of-the-art mug printing service. We use advanced heat-press sublimation technology that permanently bonds your design into the ceramic surface — ensuring vibrant, fade-resistant prints that withstand hundreds of dishwasher cycles.',
      'Our collection includes Classic White Mugs (11oz ceramic, the perfect corporate gift), Inside & Handle Colored Mugs (available in 8 vibrant colors), Magic Mugs (heat-reactive black coating that reveals your photo with hot liquid), Gold & Silver Plated Mugs (premium metallic finish for luxury gifting), and specialty options like Heart-Shaped Mugs and Animal Handle Mugs for personal occasions.',
      'Every mug undergoes a rigorous quality control process. We use FDA-approved, food-safe inks and coatings. Print area covers a generous 9.5" × 3.5" wrap-around surface. Minimum order quantity is just 1 mug, making us perfect for both individual gifts and bulk corporate orders of 1000+. All mugs come with protective packaging for safe delivery.',
    ],
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=1200&h=600&fit=crop',
  },
  {
    slug: 'merch',
    title: 'Merchandise',
    subtitle: 'Custom Branded Merchandise & Corporate Gifts',
    description: [
      'Elevate your brand presence with our comprehensive range of custom merchandise and corporate gifting solutions. From T-Shirts and Jerseys with full-color sublimation printing to precision-engraved Awards and Trophies — we bring your brand to life on every surface.',
      'Our T-Shirt & Jersey printing uses premium polyester-blend fabrics with all-over sublimation printing that won\'t crack, peel, or fade. Available in sizes XS to 5XL with options for round neck, V-neck, polo, and custom collar styles. We also offer Button Badges (25mm to 75mm), Magnetic Name Tags, Metal and Acrylic Keychains with full-color UV printing, and custom-shaped die-cut options.',
      'For corporate gifting, we offer curated combo packages including Branded Diaries, Pens, Desk Accessories, and Custom Photo Frames. Our Personalized Gifts range includes Wall Clocks, Cushion Covers, Mouse Pads, and Phone Cases — all printed with your chosen design. Bulk orders above 100 units receive free design service, custom packaging, and priority delivery.',
    ],
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&h=600&fit=crop',
  },
]

// ─── Products ───
export const products: Product[] = [
  // Identity Cards
  {
    id: 'employee-id-cards',
    name: 'Employee ID Cards',
    category: 'id-cards',
    categoryLabel: 'Identity Cards',
    description: 'Premium durable cards for corporate professionals.',
    price: 299,
    features: ['Unbreakable', 'Water-proof', 'Professional finish', 'Custom designs'],
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop',
  },
  {
    id: 'student-id-cards',
    name: 'Student ID Cards',
    category: 'id-cards',
    categoryLabel: 'Identity Cards',
    description: 'Standardized ID solutions for schools and colleges.',
    price: 199,
    features: ['Tamper-proof', 'School branding', 'Durable material', 'Quick delivery'],
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop',
  },
  {
    id: 'customized-id-cards',
    name: 'Customized ID Cards',
    category: 'id-cards',
    categoryLabel: 'Identity Cards',
    description: 'Fully custom shapes and designs tailored to your needs.',
    price: 399,
    features: ['Custom shapes', 'Unlimited designs', 'Premium quality', 'Expert consultation'],
    image: 'https://images.unsplash.com/photo-1578670812003-60745e2c2ea9?w=600&h=400&fit=crop',
  },
  {
    id: 'rfid-access-cards',
    name: 'RFID / Access Cards',
    category: 'id-cards',
    categoryLabel: 'Identity Cards',
    description: 'Smart cards for secure entry systems and access control.',
    price: 499,
    features: ['RFID enabled', 'High security', 'Enterprise ready', 'System integration'],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
  },
  {
    id: 'badge-reels',
    name: 'Retractable Badge Reels',
    category: 'id-cards',
    categoryLabel: 'Identity Cards',
    description: 'Stylish reels for easy swiping and daily use.',
    price: 149,
    features: ['Smooth retraction', 'Durable clip', 'Logo printing', 'Various colors'],
    image: 'https://images.unsplash.com/photo-1586769852044-692d6e3703f0?w=600&h=400&fit=crop',
  },
  {
    id: 'lanyards-tags',
    name: 'Lanyards & Tags',
    category: 'id-cards',
    categoryLabel: 'Identity Cards',
    description: 'Branded satin lanyards with professional logo printing.',
    price: 89,
    features: ['Satin material', 'Logo embroidery', 'Adjustable length', 'Bulk discounts'],
    image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=600&h=400&fit=crop',
  },

  // PVC Cards
  {
    id: 'business-booster-cards',
    name: 'Business Booster Cards',
    category: 'pvc-cards',
    categoryLabel: 'PVC Cards',
    description: 'Transparent or frosted premium business cards.',
    price: 249,
    features: ['Transparent finish', 'Frosted option', 'Full color print', 'Premium feel'],
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop',
  },
  {
    id: 'membership-cards',
    name: 'Membership Cards',
    category: 'pvc-cards',
    categoryLabel: 'PVC Cards',
    description: 'Loyalty and club membership cards with embossing.',
    price: 179,
    features: ['Embossed details', 'Loyalty tracking', 'Magnetic stripe', 'Premium stock'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
  },

  // Mugs
  {
    id: 'white-mugs',
    name: 'White Mugs',
    category: 'mugs',
    categoryLabel: 'Mug Printing',
    description: 'Standard corporate gifting mugs with quality print.',
    price: 99,
    features: ['Ceramic material', 'Heat resistant', 'Full color print', 'Bulk pricing'],
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&h=400&fit=crop',
  },
  {
    id: 'colored-mugs',
    name: 'Inside & Handle Colored',
    category: 'mugs',
    categoryLabel: 'Mug Printing',
    description: 'Two-tone mugs with colored interior and handle.',
    price: 129,
    features: ['Two-tone design', 'Colored interior', 'Premium print', 'Eye-catching'],
    image: 'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?w=600&h=400&fit=crop',
  },
  {
    id: 'magic-mugs',
    name: 'Magic Mugs',
    category: 'mugs',
    categoryLabel: 'Mug Printing',
    description: 'Black mugs that reveal photo when hot liquid is poured.',
    price: 159,
    features: ['Heat-reactive', 'Photo reveal', 'Premium quality', 'Unique gift'],
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&h=400&fit=crop',
  },
  {
    id: 'gold-plated-mugs',
    name: 'Golden Plated Mugs',
    category: 'mugs',
    categoryLabel: 'Mug Printing',
    description: 'Premium metallic finish with elegant gold plating.',
    price: 199,
    features: ['Gold plating', 'Premium finish', 'Luxury feel', 'Executive gift'],
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop',
  },
  {
    id: 'silver-plated-mugs',
    name: 'Silver Plated Mugs',
    category: 'mugs',
    categoryLabel: 'Mug Printing',
    description: 'Shiny chrome finish with professional silver plating.',
    price: 189,
    features: ['Silver plating', 'Chrome finish', 'Elegant design', 'Corporate gift'],
    image: 'https://images.unsplash.com/photo-1497515114889-3f3c5e24a9d4?w=600&h=400&fit=crop',
  },
  {
    id: 'porcelain-mugs',
    name: 'Porcelain Mugs',
    category: 'mugs',
    categoryLabel: 'Mug Printing',
    description: 'Elegant thin-walled porcelain mugs for refined taste.',
    price: 149,
    features: ['Fine porcelain', 'Thin-walled', 'Elegant shape', 'Premium quality'],
    image: 'https://images.unsplash.com/photo-1517256064527-9d0bfdb5e24e?w=600&h=400&fit=crop',
  },
  {
    id: 'steel-mugs',
    name: 'Steel Mugs',
    category: 'mugs',
    categoryLabel: 'Mug Printing',
    description: 'Travel-friendly unbreakable stainless steel mugs.',
    price: 139,
    features: ['Stainless steel', 'Unbreakable', 'Travel ready', 'Durable'],
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&h=400&fit=crop',
  },
  {
    id: 'animal-handle-mugs',
    name: 'Animal Handle Mugs',
    category: 'mugs',
    categoryLabel: 'Mug Printing',
    description: 'Fun gifts for kids with cute animal-shaped handles.',
    price: 119,
    features: ['Animal designs', 'Kid-friendly', 'Playful', 'Safe materials'],
    image: 'https://images.unsplash.com/photo-1532354058425-ba7fcc606f81?w=600&h=400&fit=crop',
  },
  {
    id: 'heart-shaped-mugs',
    name: 'Heart Shaped Mugs',
    category: 'mugs',
    categoryLabel: 'Mug Printing',
    description: 'Romantic couple gifts with heart-shaped design.',
    price: 129,
    features: ['Heart shape', 'Romantic', 'Couple friendly', 'Special occasion'],
    image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=600&h=400&fit=crop',
  },
  {
    id: 'black-patch-mugs',
    name: 'Black Patch Mugs',
    category: 'mugs',
    categoryLabel: 'Mug Printing',
    description: 'Modern matte finish with premium black patch design.',
    price: 149,
    features: ['Matte finish', 'Modern design', 'Premium look', 'Contemporary'],
    image: 'https://images.unsplash.com/photo-1502784444260-3e2c511bce81?w=600&h=400&fit=crop',
  },

  // Merchandise
  {
    id: 't-shirt-jerseys',
    name: 'T-Shirt & Jerseys',
    category: 'merch',
    categoryLabel: 'Merchandise',
    description: 'Custom sublimation printing on premium quality t-shirts.',
    price: 199,
    features: ['Sublimation print', 'All sizes', 'Breathable fabric', 'Color-fast'],
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=400&fit=crop',
  },
  {
    id: 'badges',
    name: 'Badges',
    category: 'merch',
    categoryLabel: 'Merchandise',
    description: 'Button badges and magnetic name tags for branding.',
    price: 49,
    features: ['Button options', 'Magnetic backing', 'Pin closures', 'Customizable'],
    image: 'https://images.unsplash.com/photo-1564466809058-bf4114d55352?w=600&h=400&fit=crop',
  },
  {
    id: 'keychains',
    name: 'Keychains',
    category: 'merch',
    categoryLabel: 'Merchandise',
    description: 'Metal, resin, and acrylic keychain options.',
    price: 79,
    features: ['Multiple materials', 'Metal ring', 'Durable', 'Branded design'],
    image: 'https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?w=600&h=400&fit=crop',
  },
  {
    id: 'photo-frames',
    name: 'Personalized Gifts',
    category: 'merch',
    categoryLabel: 'Merchandise',
    description: 'Custom photo frames, clocks, and personalized gifts.',
    price: 149,
    features: ['Photo print', 'Custom design', 'Premium materials', 'Unique gift'],
    image: 'https://images.unsplash.com/photo-1549488344-cbb6c34cf1ac?w=600&h=400&fit=crop',
  },
  {
    id: 'corporate-gifts',
    name: 'Corporate Gifts',
    category: 'merch',
    categoryLabel: 'Merchandise',
    description: 'Diaries, pens, and corporate gift combos.',
    price: 129,
    features: ['Branded items', 'Gift packaging', 'Bulk options', 'Professional'],
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop',
  },
  {
    id: 'awards-trophies',
    name: 'Mementos',
    category: 'merch',
    categoryLabel: 'Merchandise',
    description: 'Awards and trophies for recognition and events.',
    price: 249,
    features: ['Custom engraving', 'Premium materials', 'Various sizes', 'Event ready'],
    image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&h=400&fit=crop',
  },
]

export const categories = [
  { id: 'id-cards', label: 'Identity Cards' },
  { id: 'pvc-cards', label: 'PVC Cards' },
  { id: 'mugs', label: 'Mug Printing' },
  { id: 'merch', label: 'Merchandise' },
]

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((product) => product.category === categoryId)
}

export function getProductById(productId: string): Product | undefined {
  return products.find((product) => product.id === productId)
}

export function getCategoryDetail(slug: string): CategoryDetail | undefined {
  return categoryDetails.find((c) => c.slug === slug)
}

export function getAllCategories() {
  return categories
}
