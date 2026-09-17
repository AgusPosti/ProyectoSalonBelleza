using System;
using System.Collections.Generic;

namespace PeluqueriaAPI.Models;

public partial class Cliente
{
    public int IdCliente { get; set; }

    public string Nombre { get; set; } = null!;

    public string? Telefono { get; set; }

    public string? Email { get; set; }

    public virtual ICollection<Turno> Turnos { get; set; } = new List<Turno>();
}
