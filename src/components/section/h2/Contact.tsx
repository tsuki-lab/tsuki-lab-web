import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

type Props = {
  contact: {
    name: string
    href: string
  }[]
}

export const Contact: React.VFC<Props> = ({ contact }) => {
  const [state, handleSubmit] = useForm(process.env.GATSBY_FORMSPREE_KEY as string)

  return (
    <section>
      <h2>Contact</h2>

      <div className="contact-form">
        {
          state.succeeded ? (
            <p>送信が完了しました。</p>
          ) : (
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">メールアドレス</label>
              <input id="email" type="email" name="email" placeholder="info@example.com" required />
              <ValidationError prefix="Email" field="email" errors={state.errors} />

              <label htmlFor="subject">件名</label>
              <input id="subject" type="text" name="subject" required />
              <ValidationError prefix="Subject" field="subject" errors={state.errors} />

              <label htmlFor="message">本文</label>
              <textarea id="message" name="message" rows={7} required />
              <ValidationError prefix="Message" field="message" errors={state.errors} />

              <button type="submit" disabled={state.submitting}>送信</button>
            </form>
          )
        }
      </div>

      <p>問い合わせフォームをご利用ではない場合は下記連絡先にご連絡ください。</p>

      <ul>
        { contact.map((item, i) => (
          <li key={i}>
            <a href={ item.href }>{ item.name }</a>
          </li>
        )) }
      </ul>

      <p>※ ご返信には最大3営業日ほどいただくことがございます。</p>

    </section>
  )
}
