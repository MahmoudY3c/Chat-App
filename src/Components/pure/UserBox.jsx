import { Button, Link } from '@mui/material';
// eslint-disable-next-line
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';


function UserBox({ video }) {
  const Basic = styled(Button)`
    background-color: #3CAF50;
    color: #fff;
    &:hover {
      background-color: #3CAF50;
    }
  `
  return (
    <div>
      <Link href={video?.url} css={css`
        /* background-color: red; */
      `}>
        <Basic> click me </Basic>
        <h3>{video?.title}</h3>
        <p>{video?.description}</p>
      </Link>
    </div>
  );
}

export default UserBox;