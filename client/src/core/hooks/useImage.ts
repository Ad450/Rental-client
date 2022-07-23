import { useEffect, useState } from "react";
import Images from "../assets/images";

let interval: NodeJS.Timer;

export function useImage(): [url1: string, url2: string, url3: string] {
  const [url1, setUrl1] = useState<string>(Images.url1);
  const [url2, setUrl2] = useState<string>(Images.url2);
  const [url3, setUrl3] = useState<string>(Images.url3);

  let _random1: number = Math.floor(Math.random() * 4); // 1
  let _random2: number = Math.floor(Math.random() * 4); // 2
  let _random3: number = Math.floor(Math.random() * 4); // 3

  function runImageList() {
    for (var i: number = 0; i < Images.imageUrlList.length; i++) {
      if (i === _random1) {
        setUrl1(Images.imageUrlList[i]);
      } else if (i === _random2) {
        setUrl2(Images.imageUrlList[i]);
      } else if (i === _random3) {
        setUrl3(Images.imageUrlList[i]);
      }
    }
  }

  interval = setInterval(runImageList, 6000);
  return [url1, url2, url3];
}

export function useClearInterval() {
  useEffect(() => {
    return () => {
      clearInterval(interval);
    };
  });
}
