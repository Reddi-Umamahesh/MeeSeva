import { Card, CardContent } from "@/components/ui/card";

import images from "./DashImages";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";

const data1 = [
  { img: images.img1, title: "Today's Served", count: 77 },
  { img: images.img2, title: "Current Month", count: "5,32,819" },
  { img: images.img3, title: "Current Year", count: "1,70,95,887" },
  { img: images.img4, title: "No of Services", count: 26 },
  { img: images.img5, title: "Total Departments", count: 38 },
  { img: images.img6, title: "No of Centers", count: 3 },
];
const data2_1 = [
  { img: images.img2_1, title: "Total Requests", count: '19,07,32,319' },
  { img: images.img2_2, title: "Cat -A", count: "7,90,95,780" },
  { img: images.img2_3, title: "Cat -B", count: "11,13,20,701" },
 
];
const data2_2 = [
  { img: images.img2_4, title: "Total Approved", count: "9,42,34,226" },
  { img: images.img2_5, title: "Total Rejected", count: "78,25,977" },
  { img: images.img2_6, title: "Pending with SLA", count: "1,48,494" },
  { img: images.img2_7, title: "pending beyond SLA", count: "11,42,850" },
];

const TabSwitcher: React.FC = () => {
  const [activeTab, setActiveTab] = useState("transactions");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) =>
        prevTab === "transactions" ? "dashboard" : "transactions"
      );
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full px-2 sm:px-5 py-3 rounded-xl min-h-[400px]">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 p-0 bg-transparent gap-1 sm:gap-2 relative z-10">
          <TabsTrigger
            value="transactions"
            className="h-12 py-3 rounded-t-sm text-xs sm:text-sm md:text-base data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#334a92] data-[state=active]:to-[#26a69a] data-[state=active]:text-white data-[state=inactive]:bg-gradient-to-l data-[state=inactive]:from-[#334a92] data-[state=inactive]:to-[#26a69a] data-[state=inactive]:text-white"
          >
            Transactions Recorded Today
          </TabsTrigger>
          <TabsTrigger
            value="dashboard"
            className="h-12 rounded-t-sm text-xs sm:text-sm md:text-base data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#334a92] data-[state=active]:to-[#26a69a] data-[state=active]:text-white data-[state=inactive]:bg-gradient-to-l data-[state=inactive]:from-[#334a92] data-[state=inactive]:to-[#26a69a] data-[state=inactive]:text-white"
          >
            MeeSeva Dashboard
          </TabsTrigger>
        </TabsList>
        <div className="mt-2 border rounded-b-lg relative z-0 bg-white">
          <TabsContent
            value="transactions"
            className="data-[state=inactive]  data-[state=active]:block overflow-hidden"
          >
            <Card className="bg-white">
              <CardContent className="p-2 sm:p-4 sm:pt-0 pt-12">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 ">
                  {data1.map((ele, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center p-2 sm:p-4 shadow-md rounded-lg transition-all hover:shadow-lg cursor-pointer hover:bg-hover-gradient"
                    >
                      <img
                        src={ele.img}
                        alt={ele.title}
                        className="w-8 h-8 sm:w-12 sm:h-12 mb-2"
                      />
                      <span className="text-xs sm:text-sm md:text-base text-center">
                        {" "}
                        {ele.title}{" "}
                      </span>
                      <span className="text-sm sm:text-base md:text-lg font-semibold mt-1">
                        {ele.count}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent
            value="dashboard"
            className="p-2 sm:p-4 data-[state=inactive]:hidden data-[state=active]:block"
          >
            <Card className="bg-white">
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-4 sm:pt-2 pt-12 ">
                  {data2_1.map((item, Key) => (
                    <div
                      key={Key}
                      className="h-24 sm:h-32 bg-gray-100 rounded-lg flex flex-col items-center justify-center cursor-pointer"
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-8 h-8 sm:w-12 sm:h-12 mb-2"
                      />
                      <span className="text-xs sm:text-sm md:text-base text-center">
                        {" "}
                        {item.title}{" "}
                      </span>
                      <span className="text-[10px] sm:text-base md:text-lg sm:font-semibold mb-1">
                        {item.count}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {data2_2.map((ele, key) => (
                    <div
                      key={key}
                      className="h-20 sm:h-24 bg-gray-100 rounded-lg flex flex-col items-center justify-center cursor-pointer"
                    >
                      <img
                        src={ele.img}
                        alt={ele.title}
                        className="w-8 h-8 sm:w-12 sm:h-12 mb-2"
                      />
                      <span className="text-xs sm:text-sm md:text-base text-center">
                        {" "}
                        {ele.title}{" "}
                      </span>
                      <span className="text-[10px] sm:text-base md:text-lg sm:font-semibold mb-1">
                        {ele.count}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default TabSwitcher;
