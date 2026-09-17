using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PeluqueriaAPI.Models; 

namespace PeluqueriaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiciosController : ControllerBase
    {
        private readonly PeluqueriaContext _context;

        // inyeccion de la db en el constructor
        public ServiciosController(PeluqueriaContext context)
        {
            _context = context;
        }

        // GET: api/Servicios
        // endpoint que devuelve TODOS los servicios de la base de datos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Servicio>>> GetServicios()
        {
            // Busca en la base de datos y devuelve la lista
            return await _context.Servicios.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Servicio>> PostServicio(Servicio servicio)
        {
            // agregamos a la memoria
            _context.Servicios.Add(servicio);

            // guardamos en la base de datos de verdad
            await _context.SaveChangesAsync();

            // Devuelve un código 201 (Creado) y mostramos el servicio que se guardó
            return CreatedAtAction(nameof(GetServicios), new { id = servicio.IdServicio }, servicio);
        }
    }
}