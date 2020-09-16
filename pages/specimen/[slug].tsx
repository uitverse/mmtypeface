import { GetServerSideProps } from 'next'

interface SpecimenPageProps {
  slug: string
}

export default function SpecimenPage({ slug }: SpecimenPageProps): JSX.Element {
  return <div>Specimen {slug}</div>
}

export const getServerSideProps: GetServerSideProps<SpecimenPageProps> = async ({
  params,
}) => {
  return {
    props: {
      slug: params?.slug as string,
    },
  }
}
