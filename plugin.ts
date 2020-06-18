import { IApi } from 'umi';

export default function(api: IApi) {
  api.modifyDevHTMLContent(async (defaultHtml, { req }) => {
    return defaultHtml;
  });
}
