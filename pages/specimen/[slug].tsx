import { GetServerSideProps } from 'next'

interface SpecimenProps {
  slug: string
}

export default function Specimen({ slug }: SpecimenProps): JSX.Element {
  return <div>Specimen {slug}</div>
}

export const getServerSideProps: GetServerSideProps<SpecimenProps> = async ({
  params,
}) => {
  return {
    props: {
      slug: params?.slug as string,
    },
  }
}
