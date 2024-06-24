import { View, Image } from "@tarojs/components";
import "taro-ui/dist/style/components/button.scss"; // 按需引入
import { AtButton } from "taro-ui";
import Taro from "@tarojs/taro";
import homeBg from "../../ImglistDir/homeBg.png";
import "./index.scss";
import GlobalFooter from "../../components/GlobalFooter";
import { getBestQuestionResult } from "../../utils/bizUtils";
import question from "../../data/questions.json";
import questionResult from "../../data/questions_result.json";

export default () => {
  // const resultQuestion = resultQuestions[0];

  //获取答案
  const answerList = Taro.getStorageSync("answerList");
  // 如果答案为空提示异常
  if (!answerList || answerList.length < 1) {
    Taro.showToast({
      title: "答案为空",
      icon: "error",
      duration: 3000,
    });
  }
  // 通过CodeGeeX生成的算法 获取最终答案
  const resultAn = getBestQuestionResult(answerList, question, questionResult);

  return (
    <View className="resultPage">
      <View className="oneTitle">{resultAn.resultName}</View>
      <View className="twoTitle">{resultAn.resultDesc}</View>
      <AtButton
        className="txtBtn"
        type="primary"
        circle
        onClick={() => {
          Taro.reLaunch({
            url: "/pages/index/index",
          });
        }}
      >
        返回主页
      </AtButton>
      <Image className="homeBg" src={homeBg} />
      <GlobalFooter />
    </View>
  );
};
