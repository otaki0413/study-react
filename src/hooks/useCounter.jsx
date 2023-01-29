import { useCallback, useMemo, useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);

  const doubleCount = useMemo(() => {
    return count * 2;
  }, [count]);

  // ボタン押下時の処理
  const handleClick = useCallback(
    (e) => {
      // console.log(count);
      if (count < 10) {
        setCount((prevCount) => prevCount + 1);
      }
    },
    [count]
  );

  // 表示・非表示ボタン押下時の処理
  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  return { count, doubleCount, isShow, handleClick, handleDisplay };
};
