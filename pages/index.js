import Button from '../components/Button'
import Card from '../components/Card'
import ContentRow from '../components/ContentRow';
import Container from '../components/Container'

export default function Home() {
  const steps = [
    {
      title: "Step 1",
      body: "this is step 1",
    },
    {
      title: "Step 2",
      body: "this is step 2",
    },
    {
      title: "Step 3",
      body: "this is step 3",
    },
  ];

  return (
    <>
    <Container> 
      <h1>Digital Portraits for a cause.</h1>
      <p>75% of all proceeds donated to local animal rescues!</p>
    </Container>

    <Container>
      <h1>How does it work?</h1>
      <ContentRow 
        cols={steps.map(({ title, body }) => (
          <Card title={title}>{body}</Card>
        ))}
      />
    </Container>


      <h2>About Portraits For Paws</h2>
      <p> Note that irrespective of rendering type, any props will be passed to the page component and can be viewed on the client-side in the initial HTML. This is to allow the page to be hydrated correctly. Make sure that you don't pass any sensitive information that shouldn't be available on the client in props. </p>
      <p> Note that irrespective of rendering type, any props will be passed to the page component and can be viewed on the client-side in the initial HTML. This is to allow the page to be hydrated correctly. Make sure that you don't pass any sensitive information that shouldn't be available on the client in props. </p>
      <p> Note that irrespective of rendering type, any props will be passed to the page component and can be viewed on the client-side in the initial HTML. This is to allow the page to be hydrated correctly. Make sure that you don't pass any sensitive information that shouldn't be available on the client in props. </p>
      <p> Note that irrespective of rendering type, any props will be passed to the page component and can be viewed on the client-side in the initial HTML. This is to allow the page to be hydrated correctly. Make sure that you don't pass any sensitive information that shouldn't be available on the client in props. </p>

      <h2>About Portraits For Paws</h2>
      <p> Note that irrespective of rendering type, any props will be passed to the page component and can be viewed on the client-side in the initial HTML. This is to allow the page to be hydrated correctly. Make sure that you don't pass any sensitive information that shouldn't be available on the client in props. </p>
      <p> Note that irrespective of rendering type, any props will be passed to the page component and can be viewed on the client-side in the initial HTML. This is to allow the page to be hydrated correctly. Make sure that you don't pass any sensitive information that shouldn't be available on the client in props. </p>
      <p> Note that irrespective of rendering type, any props will be passed to the page component and can be viewed on the client-side in the initial HTML. This is to allow the page to be hydrated correctly. Make sure that you don't pass any sensitive information that shouldn't be available on the client in props. </p>
      <p> Note that irrespective of rendering type, any props will be passed to the page component and can be viewed on the client-side in the initial HTML. This is to allow the page to be hydrated correctly. Make sure that you don't pass any sensitive information that shouldn't be available on the client in props. </p>

      <h2>About Portraits For Paws</h2>
      <p> Note that irrespective of rendering type, any props will be passed to the page component and can be viewed on the client-side in the initial HTML. This is to allow the page to be hydrated correctly. Make sure that you don't pass any sensitive information that shouldn't be available on the client in props. </p>
      <p> Note that irrespective of rendering type, any props will be passed to the page component and can be viewed on the client-side in the initial HTML. This is to allow the page to be hydrated correctly. Make sure that you don't pass any sensitive information that shouldn't be available on the client in props. </p>
      <p> Note that irrespective of rendering type, any props will be passed to the page component and can be viewed on the client-side in the initial HTML. This is to allow the page to be hydrated correctly. Make sure that you don't pass any sensitive information that shouldn't be available on the client in props. </p>
      <p> Note that irrespective of rendering type, any props will be passed to the page component and can be viewed on the client-side in the initial HTML. This is to allow the page to be hydrated correctly. Make sure that you don't pass any sensitive information that shouldn't be available on the client in props. </p>
    </>
  )
}
