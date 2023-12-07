'use client'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import styles from '@/app/contact/page.module.css'

const EmailForm = () => {
    const form = useRef()
    const sanitizeInput = (input) => {
        return input.replace(/[{}()<>`~!@#$%^&*|\[\]\\\'\";:\/?|]/gim, '');
    };
    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(email);
    };

    // send mail
    const onSubmitForm = (event) => {
        event.preventDefault()

        try {
            const name = sanitizeInput(form.current.name.value);
            const email = form.current.email.value;
            if (!validateEmail(email)) {
                alert('이메일 주소를 확인해 주세요.');
                return;
            }
            const message = sanitizeInput(form.current.message.value);

            const formpack = {
                name: name,
                email: email,
                message: message
            }
            
            emailjs.send(
                process.env.NEXT_PUBLIC_NEXT_PUBLIC_MAIL_SERVER_KEY,
                process.env.NEXT_PUBLIC_MAIL_TEMPLATE_KEY,
                formpack,
                process.env.NEXT_PUBLIC_MAIL_PRIVATE_KEY
            )
            .then((response)=>{
                 // ... (이메일 전송 코드)
                alert('문의사항이 등록되었습니다. 빠르게 답변 드리겠습니다.');
                console.log('SUCCESS!', response.status, response.text);
            })
        } catch (error) {
            alert('문의사항 등록이 실패하였습니다.');
        }
    }

    return (
        <div className={styles.emailbox}>
            <form ref={form} className={styles.contactform} onSubmit={onSubmitForm}>
                <label>Name <span className={styles.labelstar}>*</span></label>
                <input className={styles.inputcon} type="text" name="name" required />

                <label>Email <span className={styles.labelstar}>*</span></label>
                <input className={styles.inputcon} type="email" name="email" required />

                <label>Message <span className={styles.labelstar}>*</span></label>
                <textarea className={styles.inputcon} style={{height:'12rem', fontFamily: 'Ubuntu'}} name="message" required />

                <input className={styles.consendbtn}
                    type="submit"
                    value="send"
                />
            </form>
        </div>
    )
}

export default EmailForm