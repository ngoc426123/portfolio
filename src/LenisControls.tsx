import { useLenis } from 'lenis/react';
import { useEffect } from 'react';

interface LenisControlsProps {
  ready: Boolean;
}

function LenisControls(props: LenisControlsProps) {
  // PROPS
  const { ready } = props;

  // STATE
  const lenis = useLenis();

  // SIDE EFFECTS
  useEffect(() => {
    if (!ready) {
      lenis?.stop();
      return;
    }

    lenis?.start();
  }, [ready, lenis]);

  return null;
}

export default LenisControls;