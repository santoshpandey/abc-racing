import Navigation from './Navigation';

export default function Header({ children, title }) {
   return (
    <header className="border-b sticky top-0 z-20 bg-th-background-secondary">  
        <Navigation/>
    </header>
  )
}