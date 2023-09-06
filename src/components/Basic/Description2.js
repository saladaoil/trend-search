import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Text, Flex, Stack, Divider } from '@chakra-ui/react';
import Header from '../../ui/Header';
import { Helmet } from 'react-helmet'; // react-helmetをインポート

// ホームのURL
const homeUrl = process.env.PUBLIC_URL;

const Gender = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header text="チュートリアル" />
      <Helmet>
        {/* スクリプトをここに追加 */}
        <script src="https://ssl.gstatic.com/trends_nrtr/3461_RC01/embed_loader.js" type="text/javascript" />
        <script type="text/javascript">
          {`
            trends.embed.renderExploreWidget("TIMESERIES", {"comparisonItem":[{"keyword":"スポーツ","geo":"JP","time":"today 12-m"},{"keyword":"ゲーム","geo":"JP","time":"today 12-m"},{"keyword":"人形","geo":"JP","time":"today 12-m"},{"keyword":"工作","geo":"JP","time":"today 12-m"}],"category":0,"property":"froogle"}, {"exploreQuery":"geo=JP&gprop=froogle&q=%E3%82%99%E3%82%99%E3%82%B9%E3%83%9D%E3%83%BC%E3%83%84,%E3%82%B2%E3%83%BC%E3%83%A0,%E4%BA%BA%E5%BD%A2,%E5%B7%A5%E4%BD%9C&hl=ja&date=today 12-m,today 12-m,today 12-m,today 12-m","guestPath":"https://trends.google.co.jp:443/trends/embed/"});
          `}
        </script>
      </Helmet>
      <Flex direction="column" maxW="450px" mx="auto" p="5">
        <Text textAlign="left" mt="10">
          <Text fontSize="3xl" color="black" textAlign="left" mt="2">
            商品の選び方
          </Text>
          <Text fontSize="2xl" fontWeight="bold" color="black" textAlign="left" mt="2">
            1.流行から選ぶ
          </Text>
          <Text fontSize="2xl" color="black" textAlign="left" mt="1">
            ・お孫さんの好みを知らない<br />
            ・的はずれな商品を選びたくない<br />
            方におすすめです
            <Divider />
          </Text>
          <Text fontSize="2xl" fontWeight="bold" color="black" textAlign="left" mt="2">
            2.好みから選ぶ
          </Text>
          <Text fontSize="2xl" color="black" textAlign="left" mt="1">
            ・お孫さんの好みを知っている<br />
            ・ジャンルから商品を選びたい<br />
            方におすすめです
            <Divider />
          </Text>
        </Text>
        <Stack spacing={['8', '8', '10']} mt="10" width="100%" maxW="400px">
          <Button onClick={() => navigate(`${homeUrl}/firstchoice`)} size="lg" colorScheme='twitter'>
            始める
          </Button>
        </Stack>
      </Flex>
    </>
  );
}

export default Gender;
