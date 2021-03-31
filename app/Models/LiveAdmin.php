<?php

namespace App\Models;

use App\Models\Traits\HasDates;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\LiveAdmin
 *
 * @property int $id
 * @property int $uid
 * @property-read \App\Models\User $user
 * @method static \Illuminate\Database\Eloquent\Builder|LiveAdmin newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|LiveAdmin newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|LiveAdmin query()
 * @method static \Illuminate\Database\Eloquent\Builder|LiveAdmin whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|LiveAdmin whereUid($value)
 * @mixin \Eloquent
 */
class LiveAdmin extends Model
{
    use HasDates;
    protected $table = 'live_admin';
    protected $primaryKey = 'id';
    protected $fillable = ['uid', 'remark'];

    public function user()
    {
        return $this->belongsTo(User::class, 'uid', 'uid');
    }
}
