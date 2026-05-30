import {createFileRoute} from "@tanstack/react-router";

export const Route = createFileRoute("/_app/products/")({
    component: RouteComponent,
    });

function RouteComponent() {
    return (
        <div className="container">
            <h1 className='text-black'>OLÁ</h1>

            <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente veritatis aliquam quod voluptates possimus molestiae eaque aut architecto, sunt voluptatem ducimus odit ut veniam nam sequi officiis, repellat commodi suscipit?</p>
            <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente veritatis aliquam quod voluptates possimus molestiae eaque aut architecto, sunt voluptatem ducimus odit ut veniam nam sequi officiis, repellat commodi suscipit?</p>
            <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente veritatis aliquam quod voluptates possimus molestiae eaque aut architecto, sunt voluptatem ducimus odit ut veniam nam sequi officiis, repellat commodi suscipit?</p>
            <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente veritatis aliquam quod voluptates possimus molestiae eaque aut architecto, sunt voluptatem ducimus odit ut veniam nam sequi officiis, repellat commodi suscipit?</p>
            <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente veritatis aliquam quod voluptates possimus molestiae eaque aut architecto, sunt voluptatem ducimus odit ut veniam nam sequi officiis, repellat commodi suscipit?</p>
        </div>
    );
}