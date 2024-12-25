import { NavLink, useLocation} from "react-router-dom";
import "./SearchPage.scss";
import Filter from "../../Components/Filter.jsx";
import Map from "./Map.jsx";
import ListingCard from "../../Components/ListingCard.jsx";
import { useEffect, useState } from "react";

export default function SearchPage() {
  const {search} = useLocation();
  const URL = search.split("?")[1];
  // console.log(URL)
  const [propertyData,setPropertyData] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  
console.log(import.meta.env.VITE_BACKEND_BASEURL);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_BASEURL}/api/posts?`+URL);
        const res =await response.json();
        setPropertyData(res)
        // console.log(propertyData)
        if (!response.ok) {
          throw new Error("Failed to fetch property data.");
        }
       
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [search]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loader">
          <div className="spinner"></div> 
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!propertyData) {
    return <div className="error-message mt-5 pt-5">Property not found!</div>;
  }


  return (
    <>
      <div className="searchPageContainer">
        <div className="container-fluid">
          <div className="filterHeader pt-2">
            <h1>
              Search Results for <b>{propertyData.city}</b>
            </h1>
          </div>
          <div className="sticky-filterr ">
            <div>
              <Filter type={propertyData.type} city={propertyData.city} locality={propertyData.locality} />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-8">
              {/* <div className="sticky-filter ">
                <Filter type={type} city={city} locality={locality} />
              </div> */}
              <div className="listContainer h-100">
                {propertyData.map((item) => (
                  <NavLink
                    className={" text-decoration-none"}
                    to={`/search/${item.id}`}
                    key={item.id}
                  >
                    <ListingCard item={item} />
                  </NavLink>
                ))}
              </div>
            </div>
            <div className="col-12 col-md-4 ">
              <div className="mapContainer mt-3  pt-sm-0">
                <Map items={propertyData} />
              </div>
            </div>
          </div>
          <div className="row mt-5 p-5">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
              sint, ipsa velit delectus quaerat iure aut earum sed quae,
              provident error est optio corrupti soluta itaque! Aperiam
              explicabo sit aliquam ipsa illo itaque consectetur totam molestias
              dolore saepe voluptates minus, quibusdam veritatis aliquid
              pariatur natus commodi dicta dolores modi facilis ab? Minima
              molestiae nihil ipsam non delectus. Nesciunt iste autem
              repudiandae dolor, sed cum. Porro unde quae, maxime id quia culpa
              iure, libero magnam rem itaque laudantium in minima ab veritatis
              odio dolorum sint ipsa nobis, deleniti ea molestias nisi.
              Necessitatibus tenetur non eos, qui quae quibusdam quia iusto
              libero?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
              magnam, cumque, modi necessitatibus atque dignissimos nostrum
              accusantium dolores similique, perspiciatis recusandae. Dolorem
              aperiam quaerat sequi blanditiis atque earum quia doloribus,
              reiciendis deleniti officia, aspernatur nam similique, voluptas
              doloremque odit quibusdam corporis odio est quis. Iusto autem
              alias non repudiandae numquam saepe sapiente aspernatur.
              Praesentium dolorum deleniti, neque omnis a vitae.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
              dolore ipsum libero animi praesentium rem atque odit. Aut atque
              deleniti quasi vel saepe dolorem. A, eos pariatur corrupti
              officiis et natus aliquid ipsum cum laboriosam odit quidem
              repellendus rem ullam placeat officia sed ex aliquam, delectus
              magni autem nisi. Enim numquam quos doloribus error modi alias,
              quod perferendis nesciunt repudiandae sapiente vero soluta commodi
              excepturi quia iste cumque officia molestias similique magni?
              Reprehenderit ullam molestiae recusandae blanditiis tempora
              quisquam ea cupiditate, repellendus veniam, consequatur quod
              inventore! Officia veniam cupiditate laborum sed consectetur enim
              ipsum at veritatis quod modi. Quam fugit eligendi maxime aperiam
              ipsum voluptas nisi ipsam, facere reprehenderit repudiandae ipsa?
              Assumenda esse nam veritatis, repellendus omnis cumque amet
              distinctio dolores exercitationem eligendi quisquam, beatae
              doloribus provident architecto nemo ipsa earum reprehenderit culpa
              deleniti consequuntur! Tenetur deserunt placeat quod recusandae
              autem deleniti blanditiis omnis, ea repudiandae voluptatum illo
              nisi officiis dolor eaque sed facere voluptatibus, odio incidunt.
              Necessitatibus asperiores rem dolor distinctio nisi eius dolores
              perspiciatis voluptatem porro consequuntur quas eos a quis
              doloremque tempora quibusdam provident quasi, possimus, quae
              voluptate corporis earum facilis. Impedit cumque earum distinctio
              rerum, ullam, numquam magni exercitationem tempora quae nostrum,
              minus et alias rem?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
              fugit quia veritatis doloremque quam error neque perspiciatis!
              Nostrum doloremque laborum velit ipsam, ducimus quisquam minima
              dicta vitae fugiat dolorem dolore sed nihil explicabo quo ut animi
              corporis dignissimos nobis quas sunt natus facere recusandae
              accusamus ipsum. Quas enim rem debitis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              consequatur amet dolore nihil aspernatur esse provident quas sed.
              Ipsam voluptatum quos ad dicta? Expedita sunt facere tenetur
              deserunt temporibus porro enim incidunt, tempora, similique
              praesentium quisquam. Harum dolor excepturi illum tenetur sint!
              Dignissimos corporis sunt earum eos ducimus quas modi dicta
              quisquam? Provident, velit. Laboriosam qui unde impedit laborum
              animi! Alias tempore quas officia ullam. Voluptatem possimus
              necessitatibus nesciunt! Maxime a est exercitationem cumque, nihil
              sed voluptatum! Porro, voluptates itaque deserunt soluta ad,
              alias, temporibus magni eius sapiente voluptate fugiat.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
