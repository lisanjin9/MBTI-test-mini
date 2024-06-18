import { View } from "@tarojs/components";
import "taro-ui/dist/style/components/button.scss"; // 按需引入
import { AtRadio } from "taro-ui";

import "./index.scss";
import questions from "../../data/questions.json";
import GlobalFooter from "../../components/GlobalFooter";
// eslint-disable-next-line import/first
import { useState } from "react";

export default () => {
  const question = questions[0];
  const questionOptions: any = question.options.map((option) => {
    return { label: `${option.key}.${option.value}`, value: option.key };
  });
  const [current, setCurrent] = useState<number>(1);

  return (
    <View className="questionPage">
      <View className="oneTitle">
        {current}、{question.question}
      </View>
      <AtRadio options={questionOptions} />
      <GlobalFooter />
    </View>
  );
};
