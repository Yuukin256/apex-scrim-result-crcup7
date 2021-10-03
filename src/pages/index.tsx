import React from 'react';
import ResultView from 'components/blocks/resultView';
import Layout from 'components/layouts/layout';
import Seo from 'components/layouts/seo';
import formatResultData from 'util/formatResultData';

const MainPage: React.FC = () => {
  const data = formatResultData();
  return (
    <Layout>
      <Seo title="Home" />

      <p>
        2021年10月9日に行われる 第7回 Crazy Raccoon Cup Apex Legends Powered by Mildom の事前練習カスタム (スクリム)
        の試合結果一覧 (非公式)
        です。正確性を保つ努力はしておりますが、集計に誤りがある可能性があります。ご了承ください。
      </p>

      <ul style={{ fontSize: '0.9em' }}>
        <li>本番は全5試合がWorld&apos;s Edgeで行われる予定です。</li>
        <li>
          本番は全5試合のうち、1,2,3試合目6ポイント、4試合目10ポイントのキルポイント上限があります。練習カスタムでは全チームが各マッチのキルポイント上限を意識して動いているわけではないため、キルポイント上限の有無を切り替えて結果を見られるようにしています。
        </li>
        <li>各日6試合目以降はキルポイント上限無しで集計しています。</li>
        <li>
          キルポイント上限を適用しているときにキルポイントが<em>斜体</em>
          で表示されているものは上限を超えていることを意味します。
        </li>
        <li>順位が - のものは試合不参加を意味します。</li>
      </ul>

      {data
        .concat() // reverse は破壊メソッド
        .reverse()
        .map((v) => (
          <ResultView dayResult={v} defaultNumbersOfMatches={5} key={v.day} />
        ))}

      <h2>各種リンク</h2>
      <ul>
        <li>
          <a href="https://www.mildom.com/crcup1009/">大会特設サイト (mildom.com)</a>
        </li>
        <li>
          <a href="https://www.mildom.com/10115448">大会配信サイト (mildom.com)</a>
        </li>
        <li>
          <a href="https://crazyraccoon.jp/">Crazy Raccoon 公式サイト</a>
        </li>
        <li>
          <a href="https://twitter.com/crazyraccoon406">Crazy Raccoon 公式Twitter</a>
        </li>
        <li>
          <a href="https://streamerjournal.com/?p=1327">大会概要・ルール・出場選手解説 (StreamerJさん)</a>
        </li>
      </ul>
    </Layout>
  );
};

export default MainPage;
