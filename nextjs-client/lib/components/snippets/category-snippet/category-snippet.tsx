import type { NextPage } from 'next';
import Link from 'next/link';

const CategorySnippet: NextPage = (props: any) => {
  const { categoriesList } = props;

  return (
    <div className="card mb-4">
      <h5 className="card-header">Categories</h5>
      <div className="card-body">
        <div className="row">
          <div className="col-lg-12">
            <ul className="list-unstyled mb-0">
              {categoriesList && categoriesList.map((category: any) => (
                <li key={category.slug}>
                  <Link href={`${category.url}`}>
                    <a className="text-decoration-none">{category.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CategorySnippet };
