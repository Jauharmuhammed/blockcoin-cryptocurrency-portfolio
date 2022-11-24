import moment from "moment";
import React, { useEffect, useState } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import Spinner from "./Spinner";

const News = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 9 : 31,
  });
  const { data: cryptosList } = useGetCryptosQuery(100);


  if (isFetching) return <Spinner/>

  const demoThumbnail =
    "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

  console.log(cryptoNews);
  return (
    <>
      {/* {!simplified && (
        <div className="mx-16 mt-10">
          <select name="news" id="news" className="px-3 py-2 mb-5 border outline-none" onChange={(value) => setNewsCategory(value)} >
            <option value="Cryptocurrency">Cryptocurrency</option>
            {cryptosList?.data?.coins?.map((coin)=> <option value={coin.name} key={coin.name}>{coin.name}</option> )}
          </select>
        </div>
      )} */}
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-16 mb-16 pt-5">
        {cryptoNews?.value.map((news, index) => {
          return (
            <a href={news.url} key={index} target="_blank" rel="noreferrer">
              <div className="border cursor-pointer p-3 h-full flex  flex-col  justify-between hover:shadow-md">
                <div className="flex justify-between gap-2">
                  <h3 title={news.name} className=" text-lg font-medium">
                    {news.name.length > 75
                      ? `${news.name.substring(0, 75)}...`
                      : news.name}
                  </h3>
                  <img
                    className="w-28 h-28 object-cover"
                    src={news?.image?.thumbnail?.contentUrl || demoThumbnail}
                    alt={news.name}
                  />
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <img
                      className="w-10 h-10 object-cover rounded-full"
                      src={
                        news.provider[0]?.image?.thumbnail?.contentUrl ||
                        demoThumbnail
                      }
                      alt="provider icon"
                    />
                    <p>{news.provider[0]?.name}</p>
                  </div>
                  <p className="text-gray-700 text-sm">
                    {moment(news.datePublished).startOf("ss").fromNow()}
                  </p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
};

export default News;
