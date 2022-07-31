import { useSelector } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux';
import { RootState } from 'src/App/store';

// Use throughout your app instead of plain `useSelector`
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
