
import { animated, useSpring, useSpringRef } from '@react-spring/web';
import { useElementOnScreen } from '../../../Hooks/useElementOnScreen';

export const CountNumber = ({number, className, style, delay = 300, startingNumber = 0, ...rest}) => {
  const api = useSpringRef();
  const springs = useSpring({
    ref: api,
    from: { number: startingNumber },
    delay
  })

  const startAnimation = () => {
    api.start({
      to: {
        number,
      },
      config: {
        round: true,
        ...rest
      }
    })
  }
  
  const [ isVisible, containerRef ] = useElementOnScreen();
  

  if(isVisible) {
    startAnimation();
  }

  return <animated.div ref={containerRef} className={className} style={style}>{springs.number}</animated.div>
}