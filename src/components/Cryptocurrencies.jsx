import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import millify from "millify";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import Spinner from "./Spinner";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 12 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setcryptos] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    const filteredCryptos = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchKey.toLowerCase())
    );
    setcryptos(filteredCryptos);
  }, [cryptosList, searchKey]);

  if (isFetching) return <Spinner/>

  return (
    <>
      {!simplified && (
        <div className="text-center mt-10">
          <input
            type="search"
            className="px-5 py-2 mb-5 border outline-none dark:bg-transparent dark:text-gray-200"
            placeholder="Search a coin"
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
          />
        </div>
      )}
      <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 px-5 md:px-16 mb-16 mt-6 dark:text-gray-200">
        {cryptos?.map((obj) => {
          return (
            <Link key={obj.uuid} to={`/coins/${obj.uuid}`}>
              <div
                className="border p-4 flex items-center gap-1 h-full hover:shadow-md "
              >
                  <img
                    className="w-12  object-cover"
                    src={obj.iconUrl}
                    alt={obj.name + "icon"}
                  />
                  <div className="flex flex-col gap-3 mx-auto">
                    <p className="text-gray-700 text-sm dark:text-gray-400">
                      {obj.name} ({obj.symbol})
                    </p>
                                  <h3 className="text-center text-3xl">{millify(obj.price)}</h3>
                                  {obj.change > 0 ? (
                    <div className="flex justify-center items-center  text-green-800 dark:text-green-600 gap-1">
                      <CaretUpOutlined />
                      <p className="text-center ">{obj.change}%</p>
                    </div>
                                  ) : (
                    <div className="flex justify-center items-center  text-red-800 dark:text-red-600 gap-1">
                      <CaretDownOutlined />
                      <p className="text-center ">{Math.abs(obj.change)}%</p>
                    </div>
                                  )}
                  </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Cryptocurrencies;
