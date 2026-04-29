
import Card from "./components/Card";

const App = () => {
const jobOpenings = [
  {
    brandLogo: "https://imgs.search.brave.com/J6H0MwXFkoZuO-RvSpqIS-lYmahn-SqcnSUAnhFlTiY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNS8x/Mi8xMS8xMS80My9n/b29nbGUtMTA4ODAw/NF82NDAucG5n",
    name: "Google",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: 65,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/lmU06hLRiFPIiC2OMEEyiR3RU85u_eNntjxlInbWpIM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvQW1hem9u/LUxvZ28tUE5HLUlt/YWdlLnBuZw",
    name: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: 80,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/HUN6UZb6cT4rpD94zL1nu5x9t3SgoJw6iBjquWwvgY8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC80/MS8xNC9tZXRhLXNv/Y2lhbC1tZWRpYS1s/b2dvLXN5bWJvbC1k/ZXNpZ24tdmVjdG9y/LTQ3Nzk0MTE0Lmpw/Zw",
    name: "Meta",
    datePosted: "3 days ago",
    post: "React Developer",
    tag1: "Part-time",
    tag2: "Mid Level",
    pay: 75,
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/G4fmcAaAootV6KfWEAS-LTVIEyfMC0tB3CXP9PU45Zs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMi8w/OS8xOC8xOC80MC9h/cHBsZS1sb2dvLTc0/NjM3OTVfNjQwLnBu/Zw",
    name: "Apple",
    datePosted: "1 week ago",
    post: "UI Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: 90,
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/lPlgd2xkgzqxivxTcOUN9Ph6xjIGD0TbPBr5GMMe4lw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bG9nb2pveS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjMx/MDMxMTU0NjAyLzIw/MTYtbmV0ZmxpeC1s/b2dvLTYwMHgzMTku/cG5n",
    name: "Netflix",
    datePosted: "10 days ago",
    post: "Full Stack Developer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: 85,
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://imgs.search.brave.com/qpg38pBk1LnzbD2M46z2X5iHnF_s05zJbM41yxYMyOs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5ncGxheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzkvTWlj/cm9zb2Z0LUxvZ28t/UE5HLUhELVF1YWxp/dHkucG5n",
    name: "Microsoft",
    datePosted: "3 weeks ago",
    post: "Software Engineer",
    tag1: "Part-time",
    tag2: "Junior Level",
    pay: 70,
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/8MOi2vyPNBFC91Bj6v6dyO3uH4JCCQGouIu93MZ462M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzgxLzNl/L2FjLzgxM2VhY2E5/NzU4MTc2NTJjZjI4/ZDhjMzEwMjM0MzVk/LmpwZw",
    name: "Tesla",
    datePosted: "5 weeks ago",
    post: "Node.js Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: 78,
    location: "Austin, USA"
  },
  {
    brandLogo: "https://imgs.search.brave.com/_OtYW2kn5CrdZBjt3zXvAcqCdqqKArGwmF9guASV85I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy82/MDg5NWYxNGQ1OThh/NTAwMDQ0OGVhOTku/cG5n",
    name: "NVIDIA",
    datePosted: "2 days ago",
    post: "MERN Stack Engineer",
    tag1: "Part-time",
    tag2: "Senior Level",
    pay: 95,
    location: "Pune, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/T5HE0uAi0zXg2Rf45GC-AJV0ZtPuKaBi3aOjNmRiIaE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvQWRv/YmUtTG9nby1QTkct/UGljdHVyZS5wbmc",
    name: "Adobe",
    datePosted: "4 weeks ago",
    post: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: 60,
    location: "Noida, India"
  },
  {
    brandLogo: "https://imgs.search.brave.com/IMffSVBm6BgFbv2zxzLxmL2K_4KJ5cr4ooSLZNHwaZs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c29sb2dvLmFpLzIw/MjUvMDEwMi8yMDI1/MDEwMjExMzk0ODI0/NS5wbmc",
    name: "OpenAI",
    datePosted: "1 week ago",
    post: "AI Web Developer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: 110,
    location: "San Francisco, USA"
  }
];
  return (
    <div className="parent">
      {
        jobOpenings.map((elem , idx)=>{
          return  <div  key={idx}>
          <Card logo = {elem.brandLogo}
           company={elem.name}
           datePosted = {elem.datePosted}
           post = {elem.post}
           tag1 = {elem.tag1}
           tag2 = {elem.tag2}
           pay= {elem.pay}
           location = {elem.location}
          />
          </div>
        })
      }
    </div>
  );
};

export default App;
