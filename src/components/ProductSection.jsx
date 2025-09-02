import React from 'react'
import ProductCard from './utilities/ProductCard'

const ProductSection = () => {
  return (
    <section className="h-full bg-[#F5F7F9]">

        <h2 className="text-[2.7rem] font-[600] flex justify-center pt-[5rem]">Featured Products</h2>
        <div className="flex justify-center mt-5">
            <hr className="bg-[#0084D6] h-[.2rem] w-24 rounded" />
        </div>
        <div className="py-12 px-14 grid gap-7 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <ProductCard productImage="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3-600x600.jpg" productTitle="DNK Yellow Shoes" productCategory="Men" oldPrice="$150.00" newPrice="$120.00"/>
            <ProductCard productImage="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3-600x600.jpg" productTitle="DNK Yellow Shoes" productCategory="Men" oldPrice="$150.00" newPrice="$120.00"/>
            <ProductCard productImage="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3-600x600.jpg" productTitle="DNK Yellow Shoes" productCategory="Men" oldPrice="$150.00" newPrice="$120.00"/>
            <ProductCard productImage="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3-600x600.jpg" productTitle="DNK Yellow Shoes" productCategory="Men" oldPrice="$150.00" newPrice="$120.00"/>
            <ProductCard productImage="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3-600x600.jpg" productTitle="DNK Yellow Shoes" productCategory="Men" oldPrice="$150.00" newPrice="$120.00"/>
            <ProductCard productImage="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3-600x600.jpg" productTitle="DNK Yellow Shoes" productCategory="Men" oldPrice="$150.00" newPrice="$120.00"/>
            <ProductCard productImage="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3-600x600.jpg" productTitle="DNK Yellow Shoes" productCategory="Men" oldPrice="$150.00" newPrice="$120.00"/>
            <ProductCard productImage="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3-600x600.jpg" productTitle="DNK Yellow Shoes" productCategory="Men" oldPrice="$150.00" newPrice="$120.00"/>
            <ProductCard productImage="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3-600x600.jpg" productTitle="DNK Yellow Shoes" productCategory="Men" oldPrice="$150.00" newPrice="$120.00"/>
            <ProductCard productImage="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3-600x600.jpg" productTitle="DNK Yellow Shoes" productCategory="Men" oldPrice="$150.00" newPrice="$120.00"/>
        </div>

    </section>
  )
}

export default ProductSection