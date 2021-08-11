import React from 'react';
import { Container, Inner, Wrapper } from '../atoms/Container';
import { useForm, ValidationError } from '@formspree/react';
import { Heading2 } from '../atoms/Heading';
import styled from '@emotion/styled';
import { Button, TextField } from '@material-ui/core';
import { LaunchLink } from '../molecules/LaunchLink';

type Element = JSX.IntrinsicElements['div'];
type ContactContainer = {};
type Props = Element & ContactContainer;

const Component: React.FC<Props> = ({children, ...props}) => {
  const { ...restReact } = props;

  const [state, handleSubmit] = useForm(process.env.GATSBY_FORMSPREE_KEY as string);

  return (
    <Wrapper {...restReact}>
      <Container>
        <Inner>
          <Heading2>contact</Heading2>

          <ContactForm>
            {
              state.succeeded ? (
                <p className="contact-form__succeeded">Thank you very much for contacting me.</p>
              ) : (
                <form onSubmit={handleSubmit} autoComplete="off">
                  <TextField
                    className="contact-form__email"
                    size="small"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="info@example.com"
                    label="メールアドレス"
                    required
                    error={state.errors.some(v => v.field === 'email')}
                    helperText={state.errors.find(v => v.field === 'email')?.message}
                  />

                  <TextField
                    className="contact-form__subject"
                    size="small"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    id="subject"
                    type="text"
                    name="subject"
                    label="件名"
                    placeholder="例：見積もり依頼"
                    required
                    error={state.errors.some(v => v.field === 'subject')}
                    helperText={state.errors.find(v => v.field === 'subject')?.message}
                  />

                  <TextField
                    className="contact-form__message"
                    size="small"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    id="message"
                    type="text"
                    name="message"
                    label="内容"
                    placeholder="例：お問い合わせ内容"
                    required
                    minRows={5}
                    maxRows={15}
                    multiline
                    error={state.errors.some(v => v.field === 'message')}
                    helperText={state.errors.find(v => v.field === 'message')?.message}
                  />

                  <Button
                    className="contact-form__submit"
                    type="submit"
                    variant="outlined"
                    color="primary"
                    size="small"
                    disabled={state.submitting}
                  >
                    送信
                  </Button>
                </form>
              )
            }
          </ContactForm>

          <OtherContact>
            <p>問い合わせフォームをご利用ではない場合は下記連絡先にご連絡ください。</p>

            <ul>
              <li>
                <LaunchLink href="https://twitter.com/hanetsuki_dev" target="_blank">twitter DM</LaunchLink>
              </li>
            </ul>
          </OtherContact>

          <p>※ ご返信には最大3営業日ほど頂くことがございます。</p>
        </Inner>
      </Container>
    </Wrapper>
  )
}

export const ContactContainer = styled(Component)`
  margin-top: 4rem;
`

const ContactForm = styled.div`
  min-height: 20rem;
  display: flex;

  form {
    .contact-form__email {
      display: block;
      width: 20rem;
    }
    .contact-form__subject {
      display: block;
      width: 20rem;
    }
    .contact-form__message {
      display: block;
      width: 35rem;
    }
    .contact-form__submit {
      margin-top: .4rem;
    }
  }

  .contact-form__succeeded {
    margin: auto;
    padding-bottom: .8rem;
  }
`

const OtherContact = styled.div`
  ul {
    margin: 1rem 0;
    li {
      &:not(:last-of-type) {
        margin-bottom: .3rem;
      }
    }
  }
`