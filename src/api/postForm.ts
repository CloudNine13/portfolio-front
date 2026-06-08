import type { FormData, ToastType } from '@types';

type PostFormOptions = {
  data: FormData;
  showToast: ({ message, type }: { message?: string; type?: ToastType }) => void;
};

const postForm = async ({ data, showToast }: PostFormOptions) => {
  return await fetch('/api/mail/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => {
    const statusCode = res.status;

    if (statusCode >= 200 && statusCode < 300) showToast({ type: 'SUCCESS' });
    else showToast({ type: 'ERROR' });

    return res.json();
  });
};

export default postForm;
