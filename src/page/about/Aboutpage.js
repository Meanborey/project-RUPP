import { Image } from "@mui/icons-material";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Aboutpage = () => {
    return (
        <div>
            <Navbar/>
            <div class="sm:flex items-center m-auto max-w-screen-xl mt-24">
    <div class="sm:w-1/2 p-10">
        <div class="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png"/>
        </div>
    </div>
    <div class="sm:w-1/2 p-5">
        <div class="text">
            <span class="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
            <h2 class="my-4 font-bold text-3xl  sm:text-4xl ">About <span class="text-indigo-600">Our Company</span>
            </h2>
            <p class="text-gray-700">
               We provide the best Website electronic drivce selling to create a sustainable marketplace that bridges the gap,bringing an endless range of international brands and products closer tovaluable customers in an emerging marketplace. Educating and enriching thelocal market while paving the road to a mutually beneficial business space inCambodia.
            </p>
        </div>
    </div>
</div>


<section class=" py-14 lg:py-24 ">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div class="mb-16 rounded-full">
            <h2 class=" text-32 font-manrope font-bold text-gray-900 text-center">What our happy user says!</h2>
          </div>
          <div class="swiper mySwiper2">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="relative mb-20">
                  <div class="max-w-max mx-auto lg:max-w-4xl">
                    <p class="text-lg text-gray-500 leading-8 mb-8 text-center">
                      I have been using pagedone for several months now, and I must say that it has made my life a lot
                      easier. The
                      platform's intuitive interface and ease of use have allowed me to manage my finances more effectively
                      and
                      make informed investment decisions. I particularly like the product's auto-tracking feature, which has
                      saved
                      me a lot of time and effort.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div thumbsSlider="" class=" flex items-center justify-center">
            <div class="flex ">
              <div class="swiper-slide">
                <img src="https://pagedone.io/asset/uploads/1704349534.png" alt="Emily image"
                  class="mx-auto scale-90 transition-all duration-300 swiper-slide:w-16 border rounded-full swiper-slide:border-indigo-600" />
              </div>
              <div class="swiper-slide">
                <img src="https://pagedone.io/asset/uploads/1704349572.png" alt="Ethan image"
                  class="mx-auto scale-90 transition-all duration-300 swiper-slide:w-16 border rounded-full swiper-slide:border-indigo-600" />
              </div>
              <div class="swiper-slide">
                <img src="https://pagedone.io/asset/uploads/1704349514.png" alt="Olivia image"
                  class="mx-auto scale-90 transition-all duration-300 swiper-slide:w-16 border rounded-full swiper-slide:border-indigo-600" />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="features" class="container mx-auto px-4 space-y-6 mb-20">

<div class="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">

    <h2 class="font-bold text-3xl leading-[1.1] text-32 md:text-6xl">Sponsor</h2>

    <p class="max-w-[85%] leading-normal text-muted-foreground  sm:leading-7">
        The product can personalize user experiences by understanding individual preferences and tailoring
        recommendations or content based on user behavior and historical data.
    </p>

</div>

<div class="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">

    <div
        class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
        <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
        <div class="h-12 w-12 fill-current">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///8ODg4AAAAICAjh4eF9fX0zMzNOTk7X19cqKiphYWGsrKwKCgr7+/vm5uZ0dHS8vLzu7u5DQ0OdnZ3Nzc1TU1OTk5O/v7+GhoZJSUl5eXlYWFi2trZmZmbx8fEmJiZubm45OTkeHh4YGBjIyMijo6Ourq6YmJiDg4OqYIa4AAAEDUlEQVR4nO3cWWOiMBQFYLmIomLdWxds1S76/3/hAC4VSpxOPc690vM985AjCTcJkVqNiIiIiIiIiIiIiIiIiIiIiIiIiIiIiOiXCTtBoN2GGxr3JPGi3Yyb6bdEIs/zX7UbciNhQ8RLSUO7KbexO+RLEja123ILz41jviThXLs1N1CXz4CevGs3B68uvneWMNRuD9xzLmAk2u3Ba5110UoOwyAXsIKdNCwEbGk3CK5RSNjXbhBavxCwehOaVtVH4bgQsHorp16+UlTvMVNLl0snvgy02wOXKxW+1LXbg9c5n3FXMWCyKjwbg9Xroon2adlbwadoZnHYuJBh5ergwUL8dHdtMdZuyM2s5HUYxM/azaDvCePRNAge4wsDrt4Jmpuk067b0/jOKsfgvSmf2nG35JqnbL9b/CiK9pfN3/57O3/qLY33WdnTAMtC68OdSG4Ct79sVPZTmDNuSH79sC8P0fZU4LudRjHeKaT9ncVuuyTffhIqs04y2Ab9pTguyTK2jA/Isbvx6Y3cc1+RXfShHeKSUWnn+0cy1Y7hFly+Pd+OaHbKCgqYRHzUjlJuiwqYRDRZGp9wAZPHjcHC+Ix4yBwDvlgsGU1gH11qhynTBwa0WS1yrwSvC2jzQfoOu4Wy085SDnYLZaIdpRysUvgWy0RqApvNmCz1aS1EBWxrR3H4gCW0ug2+BCWUlXYSF9SEzewL4QfQLfQ32klcULXC6GymhlsYitm3GT1UQqPVHrZwijztIE4bzKRUZtpBnEDFwubCN4NK2NMO4lT5GQ0soeFeCko41A7iBBqHhg98+6iJt9mKv678rG1R+Zk36p2T3dOmI9gmhsXXFSnYXqLV3eBaHbfhbfVpikto9f02qlzYHYk7XEKjj1Pky0Ob/2QbIF/h2zz3BdrH2EfsaKcpMwXeRE9G2nFKvCET2tzOAB41SSMaPKC4gt5ET2RqbXaD7aZZRmtLKWw39QzuD0OfplnCWDtSAW59cUxobSDWZuBnjb2KgTx86dl84f0KnLl5staOU6IDnbk9accpgzueaPXMAvAmmisVB7CRaPb7ZrhdRaPn92A10fDHv0CHo+RBO4jbIyKiuVVFTuv6iFY3FA8A/dTqpvDR1Yf2Zasd4W+uPPJt+LjCUfeqyVskd/A1gvCam2i31p+7Yn5q9C9PX/z4vb4stJv+Xc6z+5GffUXBFdD+U+akXRIx+zbEZjZptuTL9xTuLmDJwegk1Co+zjcH/d7Xv+Wb/b+MQ6fwZYxh8fOI8TqXUUy+cbroYSL7ypgOvXnZTCxcHbpr2n/bhtcTTmGQfSdi03N+3bLbn6/TS5rbe8yX6Q6s/lWLiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIfq8/tzAurNL1lJsAAAAASUVORK5CYII="/>
            </div>
            <div class="space-y-2">
                <h3 class="font-bold">Apple</h3>
                <p class="text-sm text-muted-foreground">Top 1 smart phone compeny.</p>
            </div>
        </div>
    </div>

    <div
        class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
        <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
            <div class="h-12 w-12 fill-current">
                <img src="data:image/png;base64,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"/>
            </div>
            <div class="space-y-2">
                <h3 class="font-bold">NOKIA</h3>
                <p class="text-sm">Server and Client Components. Use hook.</p>
            </div>
        </div>
    </div>

    <div
        class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
        <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
        <div class="h-12 w-12 fill-current">
                <img src="data:image/png;base64,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"/>
            </div>
            <div class="space-y-2">
                <h3 class="font-bold">ASUS</h3>
                <p class="text-sm text-muted-foreground">The coputer compeny.</p>
            </div>
        </div>
    </div>

    <div
        class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
        <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
        <div class="h-16 w-16 fill-current">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Huawei_logo_icon_170010.png"/>
            </div>
            <div class="space-y-2">
                <h3 class="font-bold">Chaina Phone</h3>
                <p class="text-sm text-muted-foreground">UI components built using Radix UI and styled with Tailwind
                    CSS.</p>
            </div>
        </div>
    </div>

    <div
        class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
        <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
        <div class="h-12 w-12 fill-current">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAtFBMVEX39/cUKKAAAAD7+/n///v8/PkAHZ0AF5wRJp9sdr7w8fUFIJ4AFZ3M0OUWK6KUnM8AAJsAH57FyeJYYrQhNafY2+sAD5tSUlLFxcXm5ubz8/OGjsdhbLrm6PEACZs/TKywtdouPKaIiIiioqJ0dHQvLy9aWlqrq6ve4O3Hx8fHy+OorteepdN6gsK3utmVnM4qO6hSXLJIVK83RquKkslncr1xe78xQqpKWLI9SquiqdRxd7uGl0ufAAAKBklEQVR4nO2diXLquBJADbJsxQvBBhM2s4QshMVJIJCE+f//eupuGQiXG5g3U2NSt0/V1IBjhHTcarWUmoxVPuTmdtRstaw/mlarObq9+UWN9fXtw6jVFqLovl4CQrRbo4dvZN08WSxqD2E93fxG1n2TY+oQIZr3x2TdcVQdQ1h3v8p6LLpXl8vjoawmh9VvEc2vstjVd+S2SNYju/oW8biTdVd0Zy6fu1zWfdE9+QncG1mcsE6DaUvLemBXZyAeUBYH1jlAaFkcWGeiQ8visuFMdPlglf/wo6vzaZWtm3bRnfgptG+sW56FZyJurRHLOhMxsp6K7sPP4cni/H42LYvz+9mwKoZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhmD8RQVxge/92z/4pwvbCTBMnlvxyeceRi/Loe7wmRRLHWRymtjj43MHL/c/jW4kvxd7XpRPd0iTRbf77A/8/EGnns+IEjSCq95/T3fDG3SvDap7bEmF+cdWx8bO7e7xte8+LunLcqDLsxvm1pAvUJLyswcsrj67nn+/CW7lZQVOZ6YRoZ7VhKXIdVV9s0v0HWRQyfgl8pUqlklJ+72Oc25LTqpPj5hdFll90h3BNhNv378aznAwbuj3Ecdd0UcSOE0VO1aaP6JeVFK+Hvvl8NdZ32vMGvLw2UeutGpFpyW/0w+JtiUT5WlTJ98FXyV3kP7DnDgh815eVm+TPOmvAxRdVUnXQKqeNkqrU4Z530iySANpT1J7qvdHVGB8HyQrgB3WKrLCCX6u/GG60Oy68NLK8LtxZUnRHFKWFz0T7NYIOuR+1Og7S3c6BGrx33kCZOzBPVQ5Alt/VsnwKBaekhq/6TjU0MdlFx9HilWw5OMQTsvQ/ft87kEXfVfKDEuovufP/3s4Bngu9da49bwwBQk/YgszzCQoqMQzNfTYG5QDe+uuhIoG29uR/rODOF5QlEhy9u/G8DNvrZadlqRf9T0N/Xu7LsmvwGP3+ZBwu8DlWvKMj+O8QMchSdf387WfoabQysmgYixBG6fxlbpdTGKnT0VFHApd+yZmjrDrJCns4eT3d3hXEWDA7LcuZ658GM2nJtz1Z3hBlh7awwxJ+elzwPBSZiw9Ny5KDquu6vVqekmESOOsxJC1/aR6q3GCgzTpOydc3ikRHTzAgWZjX8qQGstbQHmXr72W5zx9+KerqLlzvZAmK9KqkKNdJvhcXLSumadjRhV/4dn19/TYwixr1+9n7ABOBkSVmKGszc/VwBTpQTrKKwDfJmvQwv8x0exm2F5+OLPdt4+I8/iIrqecfsdJFRRMULisNMMMG81QICZgO2d0IM7sNJvRkMApnOJoNhF1Vv80CWAZRVolkJZTX/Y4n5a69E9OwA5kuyIR8Pi6rnYRJkoRF5yydRl1autXzl/rdxnogiu25i5mHfkajCWZeVQ8jEULnGL/moSxF5UW7i+0ptz7Y+2PPp3KWpVO4c2VLCtxDWeJS9jxivHRKNLyXqber31OIEKXGNvbfMTU8zZNgZuuxNwZS6kSvZzDK8kmWTjW+aW+ZbXWdkLWGmkHVreOy2qmh+L+PIsMlxVbJd1/D3egcXCWFiCEJ+TXqKC1XWpYuGdxrG8Iv2IiVAwVVki+jL8a+H3S3xez3sq5svYgqf2JvjsgS8bCPvGfFx5ZMa1UTDJEeOV0UU7Dif9oipVqAlm0ja2PrfztrIfRs7E0slBXkouX4tUpFt3IqA4rIE7JWMoXKbWZPj8nKqj7SGxS/4dFb+6zfM8Orzk18YHmoH7nlYfIycUMltpY10Mnqw4N46LUtLKgau6i0s5cgb+/5jASvqwahtwJ+n2reX2U52FrjEmTBlnU2xBJCZ5opjRm2MLpykJaH5XMj25c1tSe6ZqinekOi3q1DWdDe9YtpL5icLh20LKnrM9XzcIdzKCu8WmN9egGyaKGxx3MzujqO2cNdSwMqm79wd4gnMmZ3rWWldaUaqV4bnStBd5jqgpqTcryi9uDnp2RBfetVYcnIjsjSkUr71OJlpSHiCRnT1KnChBPjKqZoLYCqBf91T1ZjKm29c2xk+h1sZ9Yoi0IoiZG2sDdUcS1hJ31C1qvAXaYzPypLcxmyxKwBuVNpK3amtjtf2vHjSYLEVK+GeLuJrIGEjZ8zr/nKyaSRhfW1fOtF5rSKig7aBp2WBV+jPo8leLjvQmRtAjxcgznkLVWenWxc9fyFB+PEwdFuxkTWQMK+Ry2WCgt3lEVZTRdi0BzsNc06amT538laCDquiOhA6MveEGR5tb28WRxygHGzJwunk8CcHXVhFztuYC1PLrayJjr0KhVKcfM9WVMMScfbysKiQ0wwB1b1ZYk7dPV+IMsSfb+k+qp0eOqQ2EKm2LNqUrAsQZnKmQu914hoQBbsXP1t3W7jHVSBib9yWTRJdP1g57JwkqBEWA8smwLOf0UrKY7cuUpFssSmu/T1dBDUz4OZTmvNeRYdSw6zcPKKB4p+4XtDgR1U0ce6i2nFX8ptvqCzKPsdx0mn6VQlDITRiaukMEskysIzQz2wfu0TZ17QoZGvsKyPhn3aDTU2eNlE1hIiK3TzE+btSSl2KKr7l3JSqrdjdEzg0OIVDLDjGB+Us+n8AQdkYbGOM44mKk0+kkXFv9j0qD1zCO+bo/mQCktFR/2+OfU0kfUO96R9/4ssy1uZM3j8SFQp/gxeD9VsdnAQ1Q5mnlkP1shqahY4/Tqq4s1dF65rQ/YbLKORA8luDi97z+ZgolP1TYjoErcxyfdPA1OH4xOph/lG0nFdN6jT4gGHhdvzQihtr6rmEaqo2i86Y2GXrOl7w41g5G7vc2C2gK81TZeScPwBbxYQIu0O/OBjIvKrK1j2ZnDxdZr/UiOrOQ0XfjvWq6yT7WovwlWl57qOG/ReOnmQiPFbR/NGJ9Idw/aQT8Trpd/r9dyX7qB9Aa4s2EnHndrHYtHtxPlvMj3C2n/3+5f0anuAIr1k2rlard+y8f7/v0xY4/i5M+/MJuPd0ZSQR367vbdvEmkCB39jq+jifYsQv/TyHzZICg6P6wRcl3/vFO9Szv0YhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEY5pIp/m9K/RjaVqvoLvwcWtZT0V34OTxZI/4vYs9EjKxblnUm4ta64Qx/Ju0bq8wZ/kxaZav8yPPwLMSjlvXAss5CPGhZ5SbbOgPRLIMsDq1z0IEFsji0zgACC2XdF92Tn8C9kVW+K7onl89dOZfF5cMJdNmwk8Vp61swYe1ksa1vyF1tZZUfi+7S5fJYPpSlszwH1xEE5fYDWeX7Jv+1t0OEaN6Xj8kql2+eOLr2EdbTzb6fL7L01mfUanN8AUK0W6OHr3YOZEF43Y6arT/8kKvVao5ub35R8z8ogsqvKXWYUwAAAABJRU5ErkJggg=="/>
            </div>
            <div class="space-y-2">
                <h3 class="font-bold">SAMSUNG</h3>
                <p class="text-sm text-muted-foreground">Korean Company.</p>
            </div>
        </div>
    </div>

    <div
        class="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
        <div class="flex h-[180px] flex-col justify-between rounded-md p-6">
        <div class="h-12 w-12 fill-current">
                <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0025/1559/brand.gif?itok=vXujPldk"/>
            </div>
            <div class="space-y-2">
                <h3 class="font-bold">Alien Ware</h3>
                <p class="text-sm text-muted-foreground">PC gaming.</p>
            </div>
        </div>
    </div>

</div>

</section>


    <Footer/>
        </div>

    );
}
export default Aboutpage;