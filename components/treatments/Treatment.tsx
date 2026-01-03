import {Item} from "./data";
import ThumbnailSlider from "@/components/slider/ThumbnailSlider";

export const Treatment = ({item}: {
  item: Item;
}) => {
  return (
    <section className="md:even:**:data-container:flex-row-reverse border-b">
        <div className="max-w-full mx-auto px-4 md:px-8 lg:px-12 py-10 md:py-20">
          <div className="flex flex-col md:flex-row gap-10 md:gap-20 md:items-stretch" data-container="">
            <div className="md:flex-1/2">
              <ThumbnailSlider images={item.imgs}/>
            </div>

            <div className="m-auto py-4 md:flex-1/2">
              <div className="flex flex-col gap-12">
                <h2 className={`text-7xl text-${item.color} font-bold`}>{item.title} <span
                  className="text-white">{item.category}</span></h2>
                <h3 className={`text-4xl text-${item.color} font-bold`}>{item.price}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};
