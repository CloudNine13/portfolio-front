import { ToastProvider } from '@context';
import { Toast } from '@components';
import { MainView } from '@views';

export default function App() {
  return (
    <ToastProvider>
      <MainView />
      <Toast />
    </ToastProvider>
  );
}
