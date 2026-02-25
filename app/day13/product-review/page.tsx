import { Suspense } from "react";
import Product1 from "./_components/Product1";
import Review from "./_components/Review";

export default function Product() {
    return (
        <div>
            <h3>Product Review Page</h3>
            <Suspense fallback={<p>Loding Faalback for Products ...</p>}>

                <Product1 />
            </Suspense>
            <Suspense fallback={<p>Loding Faalback for Reviwes ...</p>}>
                <Review />
            </Suspense>


        </div>
    )
}