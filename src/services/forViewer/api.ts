import axios from 'axios';

import {
  BookForViewer,
  BookQuestionList,
  DetailQuestion,
  AnswersFromAuthor,
  AnswersFromReader,
} from './models';
import { PostBookQuestionParams } from '../../actions/bookQuestion';

interface ApiConfig {
  baseURL: string;
  timeout: number;
}

const DEFAULT_API_CONFIG: ApiConfig = {
  baseURL: '',
  timeout: 7000,
};

export const getBookDataForViewer = () => {
  /* apiを叩く際の設定 */
  const config = {
    ...DEFAULT_API_CONFIG,
  };
  const instance = axios.create(config);

  const getBookData = async (bookID: number) => {
    // ここでapiを叩いてデータを取得する
    const bookForViewer: BookForViewer = {
      pageForViewer: [
        {
          chapterId: 1,
          pages: [
            {
              pageId: 1,
              sentences: [
                {
                  sentenceId: 1,
                  content:
                    'React (リアクト) は、Facebookとコミュニティによって開発されているユーザインタフェース構築のためのJavaScriptライブラリである。',
                  questions: false, // (あり:0, なし:1)
                },
                {
                  sentenceId: 2,
                  content: 'React.jsまたはReactJSの名称でも知られている。',
                  questions: false, // (あり:0, なし:1)
                },
                {
                  sentenceId: 3,
                  content:
                    'ですがサーバーサイドではセッションを使うことによって可能になります。',
                  questions: false, // (あり:0, なし:1)
                },
                {
                  sentenceId: 4,
                  content:
                    'クライアントのJavaScriptを使ってる場合、ページを超えての値の保持はできません。',
                  questions: false, // (あり:0, なし:1)
                },
                {
                  sentenceId: 5,
                  content:
                    'セッションはサーバーサイドで値を保持できる機能です。',
                  questions: false, // (あり:0, なし:1)
                },
              ],
            },
          ],
        },
      ],
    };

    return bookForViewer;
  };

  return getBookData;
};
export const getBookQuestionList = () => {
  /* apiを叩く際の設定 */
  const config = {
    ...DEFAULT_API_CONFIG,
  };
  const instance = axios.create(config);

  const getBookQuestionListData = async (chapterId: number) => {
    const bookQuestionList: BookQuestionList = {
      questions: [
        {
          qustionId: 2,
          userName: 'satousan',
          createdAt: '1777/12/11',
          title: 'これは何？',
        },
      ],
    };

    return bookQuestionList;
  };

  return getBookQuestionListData;
};

export const getBookDetailQuestion = () => {
  /* apiを叩く際の設定 */
  const config = {
    ...DEFAULT_API_CONFIG,
  };
  const instance = axios.create(config);

  const getBookDetailQuestionData = async () => {
    const bookQuestionList: DetailQuestion = {
      userName: 'hoge',
      createdAt: '1888/11/11',
      pageNum: 11,
      title: 'string',
      content: 'string',
    };

    return bookQuestionList;
  };

  return getBookDetailQuestionData;
};

export const postBookQuestion = () => {
  /* apiを叩く際の設定 */
  const config = {
    ...DEFAULT_API_CONFIG,
  };
  const instance = axios.create(config);

  const postBookQuestionData = async (params: PostBookQuestionParams) => {
    // ここで実際にAPIを叩く処理を実装
    // 返り値はなし
    console.log('post処理未実装');
    console.log(params);

    return null;
  };

  return postBookQuestionData;
};

export const getAnswersFromReader = () => {
  console.log('読者からの質問を取得処理を実装する');
};
export const getAnswersFromAuthor = () => {
  console.log('著者からの質問を取得処理を実装する');
};
