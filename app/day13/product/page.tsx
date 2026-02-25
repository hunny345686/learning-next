import Link from "next/link";

export default function Product() {
    return (
        <div>
            <h3>Product Page</h3>

            <ul>
                <li><Link href={"/day13/product/1"}>Pro1</Link></li>
                <li><Link href={"/day13/product/2"}>Pro2</Link></li>
                <li><Link href={"/day13/product/3"}>Pro3</Link></li>
            </ul>
        </div>
    )
}