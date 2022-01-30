import { Spin, Typography } from "antd";
import styled from "@emotion/styled";

const FullPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FullPageLoading = () => (
  <FullPage>
    <Spin size={'large'}></Spin>
  </FullPage>
)

export const FullPageError = ({error}: {error: Error | null}) => {
  console.log('FullPageError', error);
  return (
    <FullPage>
    <span>
      {<Typography.Text>{error?.message || "出错啦"}</Typography.Text>}
    </span>
    </FullPage>
  )
}