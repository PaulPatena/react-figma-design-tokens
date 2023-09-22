import styles from './page.module.css'
import Button from '../components/Button';

export default function Buttons() {
  return (<div>
      <h1>Buttons</h1>
      <pre>{`<Button>Default with no props</Button>`}</pre>
      <Button>Default with no props</Button>
      <hr/>
      <pre>{`<Button size={'small'}>Small</Button>`}</pre>
      <Button size={'small'}>Small</Button>
      <pre>{`<Button size={'small'} color={'success'}>Small success</Button>`}</pre>
      <Button size={'small'} color={'success'}>Small success</Button>
      <hr/>
      <pre>{`<Button size={'medium'}>Medium</Button>`}</pre>
      <Button size={'medium'}>Medium</Button>
      <pre>{`<Button size={'medium'} color={'danger'}>Medium danger</Button>`}</pre>
      <Button size={'medium'} color={'danger'}>Medium danger</Button>
      <hr/>
      <pre>{`<Button size={'large'}>Large</Button>`}</pre>
      <Button size={'large'}>Large</Button>
    </div>
  )
}
