import React from 'react';
import * as styles from './ContactForm.styles'
import { useForm } from '@formspree/react';

type Element = JSX.IntrinsicElements['div'];
type ContactForm = {};
type Props = Element & ContactForm;

export const ContactForm: React.FC<Props> = ({children, ...props}) => {
  const {
    ...restProps
  } = props;

  const [state, handleSubmit] = useForm(process.env.GATSBY_FORMSPREE_KEY as string);

  return (
    <div {...restProps}>
      {
        state.succeeded ? (
          <p>Thank you very much for contacting me.</p>
        ) : (
          <form onSubmit={handleSubmit} autoComplete="on" className={styles.contactForm}>
            <div className="row">
              <label htmlFor="email">メールアドレス</label>
              <div className="field-column">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="例：info@example.com"
                  required
                />
              </div>
            </div>
            <div className="row">
              <label htmlFor="subject">件名</label>
              <div className="field-column">
                <input
                  type="email"
                  id="subject"
                  name="subject"
                  placeholder="例：見積もり依頼"
                  required
                />
              </div>
            </div>
            <div className="row">
              <label htmlFor="message">内容</label>
              <div className="field-column">
                <textarea
                  id="message"
                  name="message"
                  placeholder="例：お問い合わせ内容"
                  required
                ></textarea>
              </div>
            </div>
            {/* <TextField
              size="small"
              variant="outlined"
              fullWidth
              margin="normal"
              id="email"
              type="email"
              name="email"
              placeholder="例：info@example.com"
              label="メールアドレス"
              required
              error={state.errors.some(v => v.field === 'email')}
              helperText={state.errors.find(v => v.field === 'email')?.message}
            />

            <TextField
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
              type="submit"
              variant="outlined"
              color="primary"
              size="small"
              disabled={state.submitting}
            >
              送信
            </Button> */}
          </form>
        )
      }
    </div>
  )
}