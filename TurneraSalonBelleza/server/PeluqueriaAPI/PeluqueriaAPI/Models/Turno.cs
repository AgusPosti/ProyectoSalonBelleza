using System;
using System.Collections.Generic;

namespace PeluqueriaAPI.Models;

public partial class Turno
{
    public int IdTurno { get; set; }

    public int IdCliente { get; set; }

    public int IdEmpleado { get; set; }

    public DateTime FechaHora { get; set; }

    public string Estado { get; set; } = null!;

    public virtual Cliente IdClienteNavigation { get; set; } = null!;

    public virtual Empleado IdEmpleadoNavigation { get; set; } = null!;

    public virtual ICollection<Servicio> IdServicios { get; set; } = new List<Servicio>();
}
