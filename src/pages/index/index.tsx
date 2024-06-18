import { View, Image } from "@tarojs/components";
import "taro-ui/dist/style/components/button.scss"; // 按需引入
import { AtButton } from "taro-ui";
import homeBg from "../../ImglistDir/homeBg.png";

import "./index.scss";
import GlobalFooter from "../../components/GlobalFooter";

export default () => {
  return (
    <View className="homePage">
      <View className="oneTitle">MBTI 性格测试</View>
      <View className="twoTitle">
        只需 2 分钟，就能非常准确的描述出你是谁，以及你的性格特点
      </View>
      <AtButton className="txtBtn" type="primary" circle>
        开始测试
      </AtButton>
      <Image className="homeBg" src={homeBg} />
      <GlobalFooter />
    </View>
  );
};
