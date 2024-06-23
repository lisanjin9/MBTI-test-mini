import { View } from "@tarojs/components";
import "taro-ui/dist/style/components/button.scss"; // 按需引入
import { AtButton, AtRadio } from "taro-ui";
import { useEffect, useState } from "react";
import "./index.scss";
import GlobalFooter from "../../components/GlobalFooter";
import question from "../../data/questions.json";

export default () => {
  const questions = question[0];
  const [current, setcurrent] = useState<number>(1);

  // 根据上一题 下一题修改题目以及选项
  const [currentQuestion, setCurrentQuestion] = useState(question[0]);
  const questionOption = currentQuestion.options.map((option) => {
    return { label: `${option.key}.${option.value}`, value: option.key }; // return { label: option.key + "、" + option.value, value: option.key };
  });

  // 存储当前用户答案
  const [currentAnswer, setCurrentAnswer] = useState<String>();

  // 存储用户答案
  const [answerList] = useState<String[]>([]);


  // 钩子函数，通过监视 current 参数是否发生变化， 发生变化后调用 setCurrentQuestion 函数，更新当前题目
  useEffect(() => {
    //更新题目以及选项
    setCurrentQuestion(question[current - 1]);
    // 更新用户答案存入list中
    setCurrentAnswer(answerList[current - 1]);
  }, [current]);

  return (
    <View className="quPage">
      {/*{JSON.stringify(answerList)}*/}
      <View className="qu-oneTitle">
        {current}、{questions.title}
      </View>
      <view className="options-wrapper">
        <AtRadio
          options={questionOption}
          onClick={(value) => {
            setCurrentAnswer(value);
            answerList[current - 1] = value;
          }}
          value={currentAnswer}
        />
      </view>
      {current < question.length && (
        <AtButton
          className="qu-primary"
          type="primary"
          disabled={!currentAnswer}
          circle
          onClick={() => setcurrent(current + 1)}
        >
          下一题
        </AtButton>
      )}
      {current == question.length && (
        <AtButton className="qu-primary" type="primary" circle>
          查看结果
        </AtButton>
      )}
      {current > 1 && (
        <AtButton
          className="qu-primary"
          circle
          onClick={() => setcurrent(current - 1)}
        >
          上一题
        </AtButton>
      )}
      <GlobalFooter />
    </View>
  );
};
