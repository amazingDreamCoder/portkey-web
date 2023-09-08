import { ChainId } from '@portkey/types';
import { IRampInitState, IRampPreviewInitState, IUseHandleAchSellParams } from '../../types';
import PortkeyStyleProvider from '../PortkeyStyleProvider';
import RampMain from './index.component';

export interface IRampProps extends IUseHandleAchSellParams {
  className?: string;
  initState?: IRampInitState;
  isBuySectionShow?: boolean;
  isSellSectionShow?: boolean;
  isShowSelectInModal?: boolean; // to control the selection UI of fiat currency and token
  onBack: () => void;
  onShowPreview: ({ initState, chainId }: { initState: IRampPreviewInitState; chainId: ChainId }) => void;
}

export default function Ramp(props: IRampProps) {
  return (
    <PortkeyStyleProvider>
      <RampMain {...props} />
    </PortkeyStyleProvider>
  );
}
